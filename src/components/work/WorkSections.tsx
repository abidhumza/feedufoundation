import Button from "@/components/Button";
import Photo from "@/components/Photo";

const focusAreas = [
  {
    title: "Food & Community Welfare",
    tagline: "Essential support for everyday life.",
    text: "Food insecurity places pressure on individuals and families. We work to make nourishment more accessible and support people navigating difficult circumstances with care and dignity.",
    image: "/images/work-food.jpg",
  },
  {
    title: "Education & Livelihoods",
    tagline: "More opportunities to learn and grow.",
    text: "Education and practical skills expand choices. We help children and young people build knowledge, confidence and capabilities for future learning and greater independence.",
    image: "/images/work-education.jpg",
  },
  {
    title: "Health & Women's Well-being",
    tagline: "Better access to information and care.",
    text: "Our work encourages awareness of preventive healthcare, personal hygiene and women's health, including menstrual well-being.",
    image: "/images/work-health.jpg",
  },
  {
    title: "Legal Aid & Awareness",
    tagline: "Clarity about rights and available support.",
    text: "We aim to help underserved communities understand their rights and access appropriate guidance to make more informed decisions.",
    image: "/images/work-legal.jpg",
  },
  {
    title: "Environmental Sustainability",
    tagline: "Healthier surroundings for shared futures.",
    text: "Our environmental focus supports greener neighbourhoods, cleaner rivers and care for the spaces where people live.",
    image: "/images/work-environment.jpg",
  },
  {
    title: "Inclusion & Belonging",
    tagline: "Space for connection, participation and joy.",
    text: "Shared experiences bring people together, encourage participation and strengthen a sense of belonging.",
    image: "/images/work-inclusion.jpg",
  },
];

const approach = [
  {
    title: "Respond to Immediate Needs",
    text: "Food and essential assistance offer timely support when everyday needs become hard to meet.",
  },
  {
    title: "Encourage Greater Independence",
    text: "Learning, skills and awareness can help people build confidence and explore their options.",
  },
  {
    title: "Bring People Together",
    text: "Volunteers, donors, institutions and organisations turn concern into practical community action.",
  },
];

export function WorkHero() {
  return (
    <section className="bg-[#f5ece0]">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-12 lg:py-16 text-center">
        <span className="inline-block bg-gold px-3 py-1.5 text-sm text-navy">
          Our Work
        </span>
        <h1 className="mt-5 text-[1.875rem] sm:text-4xl font-medium leading-tight tracking-tight text-navy lg:text-5xl">
          Stronger Communities Begin With Everyday Opportunities.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.3] text-muted">
          Access to food, learning, healthcare and guidance shapes what people
          can do next. FeedU Foundation works across these connected needs to
          support underserved communities and create opportunities for greater
          independence.
        </p>
      </div>
    </section>
  );
}

export function WhyCausesMatter() {
  return (
    <section className="border-b-4 border-gold bg-navy text-white">
      <div className="grid md:grid-cols-2">
        <Photo
          src="/images/work-causes.jpg"
          alt="Children gathered at a community activity"
          className="min-h-52 md:min-h-72 lg:min-h-[25rem]"
        />
        <div className="split-text-pad flex flex-col justify-center py-8 pl-6 md:py-10 md:pl-14 lg:py-12">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium">Why These Causes Matter</h2>
          <p className="mt-5 text-base leading-[1.3]">
            <span className="text-gold">
              A child&apos;s ability to learn can be affected by hunger or poor
              health.
            </span>{" "}
            A young person&apos;s ambitions can be limited by a lack of
            practical skills.
          </p>
          <p className="mt-4 text-base leading-[1.3]">
            We recognise these connections. By working across several areas of
            community development, we aim to support people&apos;s immediate
            circumstances while opening pathways to future opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FocusAreas() {
  return (
    <section id="focus-areas" className="scroll-mt-20 bg-white pb-12 pt-0 md:pb-14 lg:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">Our Focus Areas</h2>
          <p className="mt-2 text-base text-muted">
            The needs at the heart of our work.
          </p>
        </div>

        <ul className="mt-8 md:mt-10 lg:mt-12 grid gap-x-8 gap-y-8 md:gap-y-10 lg:gap-y-12 md:grid-cols-2">
          {focusAreas.map((a) => (
            <li key={a.title}>
              <Photo
                src={a.image}
                alt={a.title}
                className="aspect-[478/270] w-full border border-line"
              />
              <h3 className="mt-5 text-[1.25rem] font-medium text-navy-deep">{a.title}</h3>
              <p className="mt-2 text-base font-medium text-navy">{a.tagline}</p>
              <p className="mt-3 max-w-md text-base leading-[1.3] text-muted">
                {a.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 md:mt-10 lg:mt-14 flex flex-wrap justify-center gap-3">
          <Button href="/donate" variant="gold" className="text-base font-semibold">
            Donate Now
          </Button>
          <Button href="/contact" variant="outline" className="text-base">
            Become a Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
}

export function OurApproach() {
  return (
    <section className="bg-navy py-20 md:py-24 lg:py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-[2rem] md:text-[2.375rem] font-medium">Our Approach</h2>
        <p className="mt-3 text-base">Support that considers the bigger picture.</p>

        <ul className="mt-6 md:mt-8 lg:mt-10 grid gap-4 md:grid-cols-3">
          {approach.map((a, i) => (
            <li key={a.title} className="min-h-44 border border-navy bg-white p-5 text-navy">
              <span className="text-[1.625rem] lg:text-[1.875rem] leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-medium leading-snug text-[1.125rem]">{a.title}</h3>
              <p className="mt-3 text-base leading-[1.3] text-muted">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function PurposeToParticipation() {
  return (
    <section className="border-t border-line bg-cream">
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <Photo
          src="/images/work-participation.jpg"
          alt="Children planting a tree together"
          className="min-h-52 md:min-h-72"
        />
        <div className="split-text-pad flex flex-col justify-center py-10 pl-6 md:py-12 md:pl-12 lg:py-14">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">
            From Purpose To Participation
          </h2>
          <p className="mt-4 text-base text-muted">
            See the activities behind our work.
          </p>
          <p className="mt-3 text-base leading-[1.3] text-muted">
            Our focus areas take shape through food drives, learning
            initiatives, health activities, legal awareness, environmental
            action and community celebrations.
          </p>
          <p className="mt-5 text-base leading-[1.3] text-muted">
            Visit our programmes page to explore these initiatives and find out
            how you can participate.
          </p>
          <Button href="/programs" className="mt-6 self-start text-base">
            Explore Our Programmes
          </Button>
        </div>
      </div>
    </section>
  );
}
