import Button from "@/components/Button";
import Photo from "@/components/Photo";
import ContactForm from "@/components/ContactForm";
import { Icon } from "@/components/home/EngageSections";
import { involvement } from "@/lib/content";

const initiatives = [
  {
    id: "food-donation",
    title: "Food Donation & Distribution Drives",
    tagline: "Help make a meal possible.",
    text: "Our food drives bring nourishment to individuals and families facing food insecurity. Individuals, groups and organisations can enquire about supporting a distribution activity.",
    image: "/images/programmes-food.jpg",
  },
  {
    id: "education",
    title: "Education & Learning Support",
    tagline: "Contribute to a child's learning journey",
    text: "These initiatives support learning opportunities for children and young people. Volunteers and supporters can contact our team to explore how their time, skills or resources.",
    image: "/images/programmes-education.jpg",
  },
  {
    id: "medical-camps",
    title: "Medical Camps & Health Awareness",
    tagline: "Support community access to care and information",
    text: "Medical camps and awareness activities aim to bring essential healthcare support and preventive health information closer to underserved communities.",
    image: "/images/programmes-medical.jpg",
  },
  {
    id: "womens-health",
    title: "Women's Health & Hygiene",
    tagline: "Encourage informed conversations about well-being.",
    text: "These activities focus on menstrual health, personal hygiene and preventive healthcare for women and girls. They aim to build awareness and improve access to relevant support.",
    image: "/images/programmes-womens-health.jpg",
  },
  {
    id: "legal-aid",
    title: "Legal Aid & Awareness",
    tagline: "Clarity about rights and available support.",
    text: "Our legal awareness activities help underserved communities understand their rights and access appropriate guidance. Legal professionals and supporters can enquire about contributing.",
    image: "/images/programmes-legal.jpg",
  },
  {
    id: "celebrations",
    title: "Celebrations & Community Engagement",
    tagline: "Give a special occasion a shared purpose.",
    text: "Plan a birthday celebration with underserved children or enquire about a community activity. Our team can discuss arrangements for an occasion centred around giving.",
    image: "/images/programmes-celebrations.jpg",
  },
  {
    id: "tree-plantation",
    title: "Tree Plantation & River Cleaning",
    tagline: "Take part in caring for shared spaces",
    text: "Environmental activities bring people together through plantation drives, river cleaning and awareness campaigns. Individuals and teams can enquire about participation in available initiatives.",
    image: "/images/programmes-environment.jpg",
  },
  {
    id: "skill-development",
    title: "Skill Development Initiatives",
    tagline: "Help practical abilities take shape.",
    text: "Our skill development work aims to strengthen capabilities that can support employability and financial independence. We welcome conversations with individuals and organisations interested in contributing relevant knowledge or support.",
    image: "/images/programmes-skill-development.jpg",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose an Initiative",
    text: "Browse our programmes and identify an activity you would like to join or support.",
  },
  {
    n: "02",
    title: "Share Your Interest",
    text: "Tell us who is participating, how you hope to contribute and any preferred dates.",
  },
  {
    n: "03",
    title: "Discuss the Details",
    text: "Our team will discuss availability, suitable arrangements and the next steps for your enquiry.",
  },
];

export function ProgrammesHero() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-8 lg:gap-10 px-6 py-8 md:py-10 lg:py-12 md:grid-cols-2">
        <div>
          <span className="inline-block bg-gold px-3.5 py-1.5 text-sm text-navy">
            Our Programmes
          </span>
          <h1 className="mt-6 text-[2.125rem] sm:text-[2.625rem] font-medium leading-[1.1] tracking-tight text-navy lg:text-[3.25rem]">
            Put Your Care Into Action.
          </h1>
          <p className="mt-6 max-w-md text-base leading-[1.3] text-muted">
            Join a community activity, support an initiative or explore a
            partnership with FeedU Foundation. Our programmes offer different
            ways to contribute through your time, skills and resources.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" className="px-6">
              Our Story
            </Button>
            <Button href="/our-work" variant="outline" className="text-base">
              See our Impact
            </Button>
          </div>
        </div>

        <Photo
          src="/images/programmes-hero.jpg"
          alt="Students celebrating with their school books"
          className="aspect-[362/267] w-full"
        />
      </div>
    </section>
  );
}

export function InitiativeList() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">
            Find An Initiative You Can Support.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-[1.3] text-muted">
            A nourishing meal. A chance to learn. Support when it matters.
            Explore how we work towards dignity, opportunity and healthier
            communities.
          </p>
        </div>

        <ul className="mx-auto mt-8 md:mt-10 lg:mt-14 grid max-w-4xl gap-x-8 gap-y-8 md:gap-y-10 lg:gap-y-14 md:grid-cols-2">
          {initiatives.map((i) => (
            <li key={i.title} id={i.id} className="flex scroll-mt-24 flex-col">
              <Photo
                src={i.image}
                alt={i.title}
                className="aspect-[327/198] w-full border border-navy/60"
              />
              <h3 className="mt-5 text-[1.25rem] font-medium text-navy-deep">{i.title}</h3>
              <p className="mt-2 text-base font-medium text-navy">{i.tagline}</p>
              <p className="mt-2 flex-1 text-base leading-[1.3] text-muted">
                {i.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WaysToParticipate() {
  return (
    <section className="bg-white pb-12 md:pb-16 lg:pb-24 pt-4 md:pt-6 lg:pt-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-left sm:text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">Ways To Participate</h2>
          <p className="mt-2 text-base text-muted">Bring what you can contribute.</p>
        </div>

        <ul className="mt-8 md:mt-10 lg:mt-14 grid gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {involvement.map((i) => (
            <li key={i.title} className="flex flex-col items-start text-left sm:items-center sm:text-center">
              <Icon name={i.icon} />
              <h3 className="mt-5 text-[1.125rem] font-medium text-navy">{i.title}</h3>
              <p className="mt-2 max-w-[17rem] flex-1 text-base leading-[1.3] text-muted">
                {i.description}
              </p>
              <Button href={i.href} className="mt-6 !px-4 text-base">
                {i.cta}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-navy py-10 md:py-12 lg:py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium">How It Works</h2>
          <p className="mt-3 text-base">Start with a simple conversation.</p>
        </div>

        <ol className="mt-8 md:mt-10 lg:mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col">
              <span className="text-[2rem] md:text-[2.375rem] text-gold">{s.n}</span>
              <div className="mt-2 min-h-32 flex-1 border border-gold bg-white p-4 text-navy">
                <h3 className="text-[1.125rem] font-medium">{s.title}</h3>
                <p className="mt-3 text-base leading-[1.3] text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ReadyToTakePart() {
  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-start gap-6 md:gap-8 lg:gap-10 px-6 py-10 md:py-12 lg:py-14 md:grid-cols-2">
        <div className="md:pt-2">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">
            Ready To Take Part?
          </h2>
          <p className="mt-3 max-w-sm text-base leading-[1.3] text-muted">
            Tell us which initiative interests you and how you would like to
            contribute. Let&apos;s explore the next step together.
          </p>
          <Button href="/csr" className="mt-6 text-base">
            Discuss a CSR Partnership
          </Button>
        </div>
        <ContactForm source="programmes" />
      </div>
    </section>
  );
}
