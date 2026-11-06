import Link from "next/link";
import Photo from "@/components/Photo";
import CauseScroller from "@/components/causes/CauseScroller";
import { causes, categoryFallback, type Cause } from "@/lib/causes";

function CauseCard({ c }: { c: Cause }) {
  return (
    <div className="flex h-full flex-col">
      <Photo
        src={c.image}
        fallback={categoryFallback[c.category]}
        alt={c.title}
        focus="center 30%"
        className="aspect-[315/358] w-full border border-navy/70"
      />
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="text-navy text-[1.125rem]">{c.title}</h3>
        <p className="shrink-0 text-teal">
          <span className="text-lg">₹{c.price}</span>
          <span className="text-sm text-navy">/{c.unit}</span>
        </p>
      </div>
      <p className="mt-2 flex-1 text-base leading-[1.3] text-muted">{c.short}</p>
      <Link
        href={`/donate/${c.slug}`}
        className="mt-4 block bg-gold py-3.5 text-center text-base text-navy transition-colors hover:bg-gold-soft"
      >
        Donate Now
      </Link>
    </div>
  );
}

/** Swipeable strip of every cause except the one currently open. */
export function CauseRow({ exclude }: { exclude?: string }) {
  return (
    <CauseScroller>
      {causes
        .filter((c) => c.slug !== exclude)
        .map((c) => (
          <CauseCard key={c.slug} c={c} />
        ))}
    </CauseScroller>
  );
}

/** Grid of cause cards. `exclude` hides one cause (used on the single donate page). */
export function CauseGrid({ exclude, limit }: { exclude?: string; limit?: number }) {
  const list = causes.filter((c) => c.slug !== exclude).slice(0, limit);
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {list.map((c) => (
        <li key={c.slug}>
          <CauseCard c={c} />
        </li>
      ))}
    </ul>
  );
}

export default function CausesSection() {
  return (
    <section id="causes" className="scroll-mt-20 bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">Our Causes</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-muted">
            There&apos;s more than one way to make a difference. Choose how you&apos;d like to contribute.
          </p>
        </div>
        <div className="mt-8 md:mt-10 lg:mt-14">
          <CauseGrid />
        </div>
      </div>
    </section>
  );
}
