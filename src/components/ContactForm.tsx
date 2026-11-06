"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const plans = ["Donate", "CSR", "Volunteer for a cause"];

const field =
  "w-full border border-line bg-white px-4 py-3.5 text-base text-navy placeholder:text-navy/45 outline-none transition focus:border-navy focus:ring-2 focus:ring-gold/60";

export default function ContactForm({
  source,
  id = "contact",
}: {
  /** Which page the form sits on; included in the email so you know where the enquiry came from. */
  source: "home" | "about" | "programmes" | "contact";
  id?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div
      id={id}
      className="scroll-mt-24 border border-line border-t-4 border-t-gold bg-white p-6 shadow-[0_10px_30px_rgba(31,45,61,0.08)] md:p-8"
    >
      {status === "success" ? (
        <div role="status" className="py-10 md:py-12 lg:py-16 text-center">
          <h3 className="font-medium text-navy text-[1.125rem]">Thank you for reaching out.</h3>
          <p className="mx-auto mt-3 max-w-xs text-base leading-[1.3] text-muted">
            Your message has been sent to our team. We will get back to you
            soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 border border-navy px-4 py-2 text-base text-navy hover:bg-navy hover:text-white"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <input name="name" required maxLength={120} placeholder="Name" autoComplete="name" className={field} />
          <input
            name="phone"
            type="tel"
            required
            maxLength={10}
            minLength={10}
            pattern="[6-9][0-9]{9}"
            inputMode="numeric"
            title="Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9"
            placeholder="Phone (10-digit mobile number)"
            autoComplete="tel-national"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
            }}
            className={field}
          />
          <input name="email" type="email" required maxLength={160} pattern="[^\s@]+@[^\s@]+\.[A-Za-z]{2,}" title="Enter a valid email address, e.g. name@example.com" placeholder="Email" autoComplete="email" className={field} />
          <input name="city" required maxLength={80} placeholder="City" autoComplete="address-level2" className={field} />

          <div className="relative">
            <select
              name="plan"
              required
              defaultValue=""
              className={`${field} appearance-none pr-10 invalid:text-navy/45`}
            >
              <option value="" disabled>
                What are you planning?
              </option>
              {plans.map((p) => (
                <option key={p} value={p} className="text-navy">
                  {p}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M2 4l4 4 4-4" />
            </svg>
          </div>

          {/* Honeypot: hidden from people, bots fill it in */}
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          {status === "error" && (
            <p role="alert" className="text-base text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-navy px-5 py-3.5 text-[1.125rem] font-medium text-white transition-colors hover:bg-navy-deep disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}
