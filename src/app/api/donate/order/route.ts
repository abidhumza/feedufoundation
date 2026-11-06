import { NextResponse } from "next/server";
import { getCause, photoAddon } from "@/lib/causes";

export const runtime = "nodejs";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Small in-memory rate limit: 10 order attempts / 10 min / IP.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 10;
}

export async function POST(req: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    console.error("Donate: RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET are not set.");
    return NextResponse.json({ error: "Online payments are not configured yet." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many attempts. Please try again later." }, { status: 429 });

  const cause = getCause(clean(body.slug, 80));
  if (!cause) return NextResponse.json({ error: "Unknown cause." }, { status: 400 });

  const count = Number(body.count);
  if (!Number.isInteger(count) || count < 1 || count > 10000) {
    return NextResponse.json({ error: "Please enter a valid quantity." }, { status: 400 });
  }
  const donorName = clean(body.donorName, 80);
  const phone = clean(body.phone, 10);
  const parcelName = clean(body.parcelName, 40);
  const serviceDate = clean(body.serviceDate, 10);
  if (!donorName || !/^[6-9][0-9]{9}$/.test(phone) || !/^\d{4}-\d{2}-\d{2}$/.test(serviceDate)) {
    return NextResponse.json({ error: "Please fill in your name, a valid mobile number and the service date." }, { status: 400 });
  }
  const photo = body.photo === true;

  // The amount is ALWAYS computed here from our own price list, never trusted from the browser.
  const rupees = count * (cause.price + (photo ? photoAddon : 0));
  const amount = rupees * 100; // paise

  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
    },
    body: JSON.stringify({
      amount,
      currency: "INR",
      receipt: `${cause.slug}-${Date.now()}`.slice(0, 40),
      notes: {
        cause: cause.title,
        quantity: String(count),
        photo_on_parcel: photo ? "yes" : "no",
        donor_name: donorName,
        donor_phone: phone,
        name_on_parcel: parcelName || "-",
        service_date: serviceDate,
      },
    }),
  });

  const order = await res.json().catch(() => ({}));
  if (!res.ok || !order.id) {
    console.error("Razorpay order error", order);
    return NextResponse.json({ error: "Could not start the payment. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ orderId: order.id, amount: order.amount, keyId });
}
