import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return NextResponse.json({ error: "Payments are not configured." }, { status: 500 });

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const orderId = String(b.razorpay_order_id || "");
  const paymentId = String(b.razorpay_payment_id || "");
  const signature = String(b.razorpay_signature || "");
  if (!orderId || !paymentId || !signature) return NextResponse.json({ error: "Missing payment details." }, { status: 400 });

  const expected = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const a = Buffer.from(expected);
  const c = Buffer.from(signature);
  if (a.length !== c.length || !crypto.timingSafeEqual(a, c)) {
    return NextResponse.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  // Signature is valid. Best-effort: email the team the donation details (never blocks success).
  try {
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const res = await fetch(`https://api.razorpay.com/v1/orders/${orderId}`, {
        headers: { Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64") },
      });
      const order = await res.json();
      const n = (order.notes ?? {}) as Record<string, string>;
      const port = Number(SMTP_PORT) || 465;
      const t = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
      await t.sendMail({
        from: `"FeedU Foundation" <${SMTP_FROM || SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL || "info@feedufoundation.com",
        subject: `New donation: ${n.cause} × ${n.quantity} (₹${(order.amount ?? 0) / 100})`,
        text: [
          `Cause: ${n.cause}`,
          `Quantity: ${n.quantity}`,
          `Amount: ₹${(order.amount ?? 0) / 100}`,
          `Donor: ${n.donor_name} (+91 ${n.donor_phone})`,
          `Name on parcel: ${n.name_on_parcel}`,
          `Photo on parcel: ${n.photo_on_parcel}`,
          `Service date: ${n.service_date}`,
          `Razorpay payment ID: ${paymentId}`,
          `Razorpay order ID: ${orderId}`,
        ].join("\n"),
      });
    }
  } catch (err) {
    console.error("Donate: notification email failed", err);
  }

  return NextResponse.json({ ok: true });
}
