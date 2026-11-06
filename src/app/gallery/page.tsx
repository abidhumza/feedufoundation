import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { categories, categoryFallback, galleryItems, type Category } from "@/lib/causes";

export const metadata: Metadata = {
  title: "Gallery | FeedU Foundation",
  description: "Moments from FeedU Foundation's work across food, animals, education, environment and healthcare.",
};

type Props = { searchParams: Promise<{ category?: string }> };

export default async function GalleryPage({ searchParams }: Props) {
  const q = (await searchParams).category;
  const active = categories.find((c) => c.slug === q)?.slug as Category | undefined; // undefined = All
  const items = active ? galleryItems.filter((g) => g.category === active) : galleryItems;

  const tab = (on: boolean) =>
    `border px-6 py-2 text-base transition-colors ${on ? "border-gold bg-gold text-navy" : "border-navy bg-white text-navy hover:bg-navy hover:text-white"}`;

  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 text-left sm:text-center">
          <h1 className="text-[2.125rem] sm:text-[2.625rem] font-medium tracking-tight text-navy lg:text-[3.25rem]">Gallery</h1>
        </div>
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Gallery categories" className="flex flex-wrap justify-start gap-2 sm:justify-center">
            <Link href="/gallery" scroll={false} className={tab(!active)}>All</Link>
            {categories.map((c) => (
              <Link key={c.slug} href={`/gallery?category=${c.slug}`} scroll={false} className={tab(active === c.slug)}>
                {c.label}
              </Link>
            ))}
          </nav>

          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {items.map((g, i) => (
              <li key={`${g.category}-${i}`}>
                <Photo src={g.src} fallback={categoryFallback[g.category]} focus="center 30%" alt={g.alt} className="aspect-[4/5] w-full border border-navy/60" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
