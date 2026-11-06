import Button from "@/components/Button";
import Photo from "@/components/Photo";
import Counter from "@/components/Counter";
import { stats } from "@/lib/content";

export function Hero() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-8 lg:gap-10 px-6 py-8 md:py-10 lg:py-12 md:grid-cols-2">
        <div>
          <span className="inline-block bg-gold px-3.5 py-1.5 text-sm text-navy">
            Non-Profit Organisation · Social Impact NGO
          </span>
          <h1 className="mt-6 text-[2.125rem] sm:text-[2.625rem] font-medium leading-[1.1] tracking-tight text-navy lg:text-[3.25rem]">
            Every Life Deserves A Chance.
          </h1>
          <p className="mt-6 max-w-md text-base leading-[1.3] text-muted">
            Every community deserves to thrive. Feedu Foundation is a
            non-profit organisation and social impact NGO working towards
            building stronger communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/donate" className="px-6">
              Donate Now
            </Button>
            <Button href="/our-work" variant="outline" className="text-base">
              See our Impact
            </Button>
          </div>
        </div>

        <Photo
          src="/images/hero.jpg"
          alt="Two girls carrying a stone and books on their heads"
          className="aspect-[355/262] w-full"
        />
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section id="impact" className="bg-navy py-7 text-white">
      <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label} className="text-center">
            <p className="text-[1.75rem] sm:text-3xl font-semibold text-gold"><Counter to={s.value} /></p>
            <p className="mt-1 text-base">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Intro() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy ">
          Compassion Brings Us Together. Action Moves Us Forward.
        </h2>
        <div className="mt-6 md:mt-8 lg:mt-10 space-y-3 text-base leading-[1.3] text-muted">
          <p>
            FeedU Foundation is a non-profit organisation working to build
            stronger communities and a more sustainable future.
          </p>
          <p>
            We support people through food donation, education, healthcare,
            skill development and legal aid. Alongside this, our plantation
            and river cleaning initiatives help protect the spaces communities
            depend on.
          </p>
          <p>
            At the heart of our work is a simple belief: no one should have to
            face life&apos;s struggles alone.
          </p>
        </div>
        <Button href="/about" variant="gold" className="mt-8 text-base font-semibold">
          Our Story
        </Button>
      </div>
    </section>
  );
}
