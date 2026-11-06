import type { Metadata } from "next";
import { privacyEffective, privacySections, type PolicyBlock } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | FeedU Foundation",
  description: "How FeedU Foundation collects, uses, shares, retains and protects personal information.",
};

/** Tiny inline renderer: **bold** and [text](url). */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**")) return <strong key={i} className="font-semibold text-navy">{p.slice(2, -2)}</strong>;
        const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link)
          return (
            <a key={i} href={link[2]} target="_blank" rel="noreferrer" className="text-teal underline underline-offset-2 hover:text-navy">
              {link[1]}
            </a>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function Block({ b }: { b: PolicyBlock }) {
  if (b.t === "ul")
    return (
      <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-[1.3] text-muted marker:text-gold">
        {b.items.map((it, i) => (
          <li key={i}><Inline text={it} /></li>
        ))}
      </ul>
    );
  return (
    <p className="mt-3 text-base leading-[1.3] text-muted">
      <Inline text={b.text} />
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 text-left sm:text-center">
          <h1 className="text-[2.125rem] sm:text-[2.625rem] font-medium tracking-tight text-navy lg:text-[3.25rem]">Privacy Policy</h1>
          <p className="mt-3 text-base text-muted">FEEDU WELFARE FOUNDATION · Effective Date: {privacyEffective}</p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          {privacySections.map((s, i) => (
            <div key={s.title} className={i === 0 ? "" : "mt-8 md:mt-10"}>
              <h2 className="text-[1.375rem] md:text-[1.625rem] font-medium text-navy">
                {i + 1}. {s.title}
              </h2>
              {s.blocks.map((b, j) => (
                <Block key={j} b={b} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
