import type { Metadata } from "next";
import { termsEffective, termsSections } from "@/lib/terms";
import type { PolicyBlock } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Terms and Conditions | FeedU Foundation",
  description: "Terms and conditions governing use of the FeedU Foundation website, charitable contributions and programme participation.",
};

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return <>{parts.map((part, index) => part.startsWith("**") ? <strong key={index} className="font-semibold text-navy">{part.slice(2, -2)}</strong> : <span key={index}>{part}</span>)}</>;
}

function Block({ block }: { block: PolicyBlock }) {
  if (block.t === "ul") return <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-[1.3] text-muted marker:text-gold">{block.items.map((item, index) => <li key={index}><Inline text={item} /></li>)}</ul>;
  return <p className="mt-3 text-base leading-[1.3] text-muted"><Inline text={block.text} /></p>;
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 text-left sm:text-center md:py-16">
          <h1 className="text-[2.125rem] font-medium tracking-tight text-navy sm:text-[2.625rem] lg:text-[3.25rem]">Terms and Conditions</h1>
          <p className="mt-3 text-base text-muted">FEEDU WELFARE FOUNDATION · Effective Date: {termsEffective}</p>
        </div>
      </section>
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6">
          {termsSections.map((section, index) => (
            <div key={section.title} className={index === 0 ? "" : "mt-8 md:mt-10"}>
              <h2 className="text-[1.375rem] font-medium text-navy md:text-[1.625rem]">{index + 1}. {section.title}</h2>
              {section.blocks.map((block, blockIndex) => <Block key={blockIndex} block={block} />)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
