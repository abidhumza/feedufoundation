import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import CauseCarousel from "@/components/donate/CauseCarousel";
import DonationForm from "@/components/donate/DonationForm";
import { CauseRow } from "@/components/causes/CausesSection";
import { categories, categoryFallback, causes, getCause, photoAddon } from "@/lib/causes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return causes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCause((await params).slug);
  return c ? { title: `${c.title} | FeedU Foundation`, description: c.short } : {};
}

const badges = [
  { t: "80G Certified", s: "50% Tax Saved", d: "M3 10l9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18" },
  { t: "100% Secure", s: "Encrypted Gateway", d: "M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z" },
  { t: "Transparent", s: "Photo & GPS Proof", d: "M4 8h4l2-3h4l2 3h4v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" },
  { t: "CSR Eligible", s: "Form-1 Compliant", d: "M5 4h14v16H5zM8 12l3 3 5-6" },
];

export default async function CausePage({ params }: Props) {
  const c = getCause((await params).slug);
  if (!c) notFound();
  const fb = categoryFallback[c.category];
  const catLabel = categories.find((x) => x.slug === c.category)!.label;

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pt-5 text-sm text-navy">
        <Link href="/" className="hover:text-teal">Home</Link> / <Link href="/donate" className="hover:text-teal">Causes</Link> /{" "}
        <Link href={`/gallery?category=${c.category}`} className="hover:text-teal">{catLabel}</Link> / <span className="font-medium">{c.title}</span>
      </div>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-6 lg:grid-cols-[1.35fr_1fr] lg:items-start">
        <div className="min-w-0">
          <CauseCarousel images={c.gallery} fallback={fb} alt={c.title} />
          <div className="mt-3 text-right text-sm text-navy">
            <p className="font-medium text-emerald-800">100% WhatsApp Proof</p>
            <p className="mt-1 text-navy/70">Sent within 24h of feeding</p>
            {c.servedThisMonth ? (
              <p className="mt-2 inline-block rounded-full bg-navy/80 px-3 py-1 text-white">
                #{c.servedThisMonth.toLocaleString("en-IN")} served this month
              </p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border border-line bg-cream p-4">
            <div className="max-w-md">
              <h2 className="text-[1.125rem] font-semibold text-navy">{c.includesTitle}</h2>
              <p className="mt-1 text-base leading-[1.3] text-muted">{c.includes}</p>
            </div>
            <span className="bg-teal px-3 py-1.5 text-sm font-medium text-white">{c.priceTag}</span>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {badges.map((b) => (
              <li key={b.t} className="flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-navy text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.d} />
                  </svg>
                </span>
                <span className="text-sm leading-tight text-navy">
                  <span className="block font-semibold">{b.t}</span>
                  <span className="text-navy/70">{b.s}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:sticky lg:top-20">
          <DonationForm
            slug={c.slug}
            title={c.title}
            price={c.price}
            unit={c.unit}
            priceUnitLabel={`per ${c.unit}`}
            countLabel={c.countLabel}
            presets={c.presets}
            photoAddon={photoAddon}
          />
        </div>
      </section>

      <section className="bg-white py-12 md:py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">{c.headline}</h2>
            {c.about.map((p) => (
              <p key={p} className="mt-4 text-base leading-[1.3] text-muted">{p}</p>
            ))}
          </div>
          <Photo src={c.aboutImage} fallback={fb} focus="center 30%" alt={c.title} className="aspect-[4/3] w-full border border-navy/60" />
        </div>
      </section>

      <section className="bg-white pb-12 md:pb-16 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-[2rem] md:text-[2.375rem] font-medium text-navy">See The Impact</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {c.impact.map((src, i) => (
              <li key={i}>
                <Photo src={src} fallback={fb} focus="center 30%" alt={`${c.title} impact ${i + 1}`} className="aspect-[4/5] w-full border border-navy/60" />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button href={`/gallery?category=${c.category}`} variant="outline" className="!block w-full text-center text-base sm:!inline-block sm:w-auto">
              View More
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 md:pb-16 lg:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">You May Also Donate</h2>
            <p className="mx-auto mt-3 max-w-md text-base text-muted">
              There&apos;s more than one way to make a difference. Choose how you&apos;d like to contribute.
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <CauseRow exclude={c.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
