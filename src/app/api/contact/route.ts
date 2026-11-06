import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const PLANS = ["Donate", "CSR", "Volunteer for a cause"];

const TO = process.env.CONTACT_TO_EMAIL || "info@feedufoundation.com";

// Very small in-memory rate limit (per server instance): 5 messages / 10 min / IP.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in: pretend success, send nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 20).replace(/[\s-]/g, "");
  const email = clean(body.email, 160);
  const city = clean(body.city, 80);
  const plan = clean(body.plan, 40);

  if (!name || !phone || !city || !plan) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!PLANS.includes(plan)) {
    return NextResponse.json({ error: "Please choose what you are planning." }, { status: 400 });
  }
  if (!/^[6-9][0-9]{9}$/.test(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9." },
      { status: 400 },
    );
  }
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(email) || email.includes("..")) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_HOST / SMTP_USER / SMTP_PASS are not set.");
    return NextResponse.json(
      { error: "Our mail service is not configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"FeedU Foundation" <${SMTP_FROM || SMTP_USER}>`,
      to: TO,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry: ${plan} - ${name} (${city})`,
      text: [
        `Name: ${name}`,
        `Phone: +91 ${phone}`,
        `Email: ${email}`,
        `City: ${city}`,
        `Planning: ${plan}`,
      ].join("\n"),
      html: `
        <h2>New enquiry from the website</h2>
        <p><b>Name:</b> ${esc(name)}<br/>
        <b>Phone:</b> +91 ${esc(phone)}<br/>
        <b>Email:</b> ${esc(email)}<br/>
        <b>City:</b> ${esc(city)}<br/>
        <b>Planning:</b> ${esc(plan)}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json(
      { error: "We could not send your message. Please try again shortly." },
      { status: 500 },
    );
  }
}
