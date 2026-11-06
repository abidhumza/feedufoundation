"use client";

import { useRef, useState } from "react";

type Status = "idle" | "creating" | "paying" | "verifying" | "success" | "error";

declare global {
  interface Window {
    Razorpay?: new (opts: Record<string, unknown>) => { open: () => void; on: (e: string, cb: (r: unknown) => void) => void };
  }
}

function loadCheckout(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

const input =
  "w-full border-0 bg-transparent text-base text-navy placeholder:text-navy/50 outline-none";
const box = "flex items-center gap-2 rounded-md bg-[#f3f4f6] px-3 py-3 focus-within:ring-2 focus-within:ring-gold/60";

export default function DonationForm({
  slug,
  title,
  price,
  unit,
  priceUnitLabel,
  countLabel,
  presets,
  photoAddon,
}: {
  slug: string;
  title: string;
  price: number;
  unit: string;
  priceUnitLabel: string;
  countLabel: string;
  presets: number[];
  photoAddon: number;
}) {
  const today = new Date().toISOString().slice(0, 10);
  const [count, setCount] = useState(presets[0] ?? 20);
  const [photo, setPhoto] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const countRef = useRef<HTMLInputElement>(null);

  const total = count * (price + (photo ? photoAddon : 0));
  const busy = status === "creating" || status === "verifying";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const donorName = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const parcelName = String(f.get("parcelName") || "").trim();
    const serviceDate = String(f.get("date") || "");

    setError("");
    setStatus("creating");
    try {
      const ok = await loadCheckout();
      if (!ok) throw new Error("Could not load the payment window. Check your connection and try again.");

      const res = await fetch("/api/donate/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, count, photo, donorName, phone, parcelName, serviceDate }),
      });
      const order = await res.json();
      if (!res.ok) throw new Error(order.error || "Could not start the payment.");

      const rzp = new window.Razorpay!({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: "INR",
        name: "FeedU Foundation",
        description: `${title} × ${count}`,
        prefill: { name: donorName, contact: `+91${phone}` },
        theme: { color: "#1f2d3d" },
        modal: { ondismiss: () => setStatus("idle") },
        handler: async (r: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          setStatus("verifying");
          try {
            const v = await fetch("/api/donate/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(r),
            });
            if (!v.ok) throw new Error((await v.json().catch(() => ({}))).error || "Verification failed.");
            setStatus("success");
          } catch (err) {
            setError(
              (err instanceof Error ? err.message : "Verification failed.") +
                " If money was deducted, please contact us with payment ID " + r.razorpay_payment_id + ".",
            );
            setStatus("error");
          }
        },
      });
      rzp.on("payment.failed", () => {
        setError("The payment did not go through. Please try again.");
        setStatus("error");
      });
      setStatus("paying");
      rzp.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-white p-8 text-center">
        <h2 className="text-xl font-medium text-navy">Thank you for your kindness.</h2>
        <p className="mt-3 text-base leading-[1.3] text-muted">
          Your ₹{total.toLocaleString("en-IN")} contribution to {title} was received. We will share photo proof on WhatsApp after the service.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-5 md:p-6">
      <h1 className="text-xl font-medium text-navy">{title}</h1>
      <p className="mt-1 text-base text-teal">
        <span className="text-lg">₹{price}/</span>
        {priceUnitLabel}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className={box}>
          <input name="name" required maxLength={80} placeholder="Donor Name *" autoComplete="name" className={input} />
        </label>
        <label className={box}>
          <span className="shrink-0 text-base text-navy">+91</span>
          <input
            name="phone"
            type="tel"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="10-digit Indian mobile number"
            placeholder="Number"
            autoComplete="tel-national"
            onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10))}
            className={input}
          />
        </label>
        <label className={box}>
          <input name="parcelName" maxLength={40} placeholder="Name on Parcel (optional)" className={input} />
        </label>
        <label className={`${box} flex-col !items-start gap-0 !py-1.5`}>
          <span className="text-xs text-navy/60">Service Date *</span>
          <input name="date" type="date" required min={today} defaultValue={today} className={input} />
        </label>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 rounded-md bg-[#f3f4f6] px-3 py-2">
        <label className="flex-1 min-w-24">
          <span className="block text-xs text-navy/60">{countLabel}</span>
          <input
            ref={countRef}
            type="number"
            min={1}
            max={10000}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(10000, Math.floor(Number(e.target.value) || 1))))}
            className={`${input} !text-base font-medium`}
          />
        </label>
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setCount(p)}
            className={`px-3 py-1.5 text-sm ${count === p ? "bg-navy text-white" : "bg-white text-navy"}`}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            countRef.current?.focus();
            countRef.current?.select();
          }}
          className="bg-teal px-3 py-1.5 text-sm text-white"
        >
          Custom
        </button>
      </div>

      <label className="mt-4 flex items-center gap-2 border-b border-line pb-4 text-sm text-navy">
        <input type="checkbox" checked={photo} onChange={(e) => setPhoto(e.target.checked)} />
        <span>
          Add a photo on the parcel <span className="text-navy/60">(optional)</span>
        </span>
        <span className="ml-auto text-teal">+ ₹{photoAddon}/{unit === "serving" ? "parcel" : unit}</span>
      </label>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-base text-navy">Total contribution</span>
        <span className="text-2xl font-semibold text-navy">₹{total.toLocaleString("en-IN")}</span>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-3 text-base text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy || status === "paying"}
        className="mt-4 w-full bg-gold py-3.5 text-base font-medium text-navy transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {status === "creating" ? "Starting payment…" : status === "verifying" ? "Confirming payment…" : "Donate Now"}
      </button>
    </form>
  );
}
