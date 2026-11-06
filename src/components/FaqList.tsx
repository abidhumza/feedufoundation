"use client";

import { useState } from "react";

/** Accordion where opening one question closes the others. */
export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="mt-6 md:mt-8 lg:mt-10 space-y-3">
      {items.map((f, i) => (
        <details
          key={f.q}
          open={openIndex === i}
          className="rounded-lg border border-line bg-white px-4 py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
        >
          <summary
            onClick={(e) => {
              e.preventDefault(); // we control open/close so only one stays open
              setOpenIndex(openIndex === i ? -1 : i);
            }}
            className="flex cursor-pointer items-center justify-between gap-4 text-base text-navy"
          >
            {f.q}
            <span aria-hidden="true">
              <svg className="faq-icon-plus" width="10" height="10" viewBox="0 0 10 10">
                <circle cx="5" cy="5" r="5" fill="#000" />
                <path d="M5 2.5v5M2.5 5h5" stroke="#fff" strokeWidth="1.2" />
              </svg>
              <svg className="faq-icon-minus" width="10" height="10" viewBox="0 0 10 10">
                <circle cx="5" cy="5" r="5" fill="#000" />
                <path d="M2.5 5h5" stroke="#fff" strokeWidth="1.2" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 pr-8 text-base leading-[1.3] text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
