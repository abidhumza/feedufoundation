import Image from "next/image";
import Button from "@/components/Button";
import Photo from "@/components/Photo";

const focus = [
  { title: "Food Donation and Hunger Relief", image: "/images/csr-food.jpg", text: "Support food distribution drives, community meals and corporate food donation programmes for people experiencing food insecurity. Suitable initiatives may also include employee participation in food distribution." },
  { title: "Education and Skill Development", image: "/images/csr-education-skill.jpg", text: "Contribute learning resources, educational materials and community learning opportunities. Explore vocational training and skill development initiatives that help people build practical capabilities." },
  { title: "Women's Health and Hygiene", image: "/images/csr-womens-health.jpg", text: "Support menstrual health education, hygiene awareness sessions and distribution of essential hygiene products for women and girls in underserved communities." },
  { title: "Healthcare and Medical Camps", image: "/images/csr-healthcare.jpg", text: "Explore community medical camps, preventive health awareness and health education activities. Projects can also support access to essential healthcare resources according to local needs." },
  { title: "Environmental Sustainability", image: "/images/csr-environment.jpg", text: "Encourage community participation through tree plantation, greening activities, cleanliness drives and environmental education. Support awareness of waste management and responsible disposal." },
  { title: "Legal Aid and Community Support", image: "/images/csr-legal.jpg", text: "Promote understanding of legal rights through legal literacy sessions and community outreach. Help people access relevant information and connect with appropriate support resources." },
];

const ways = [
  { title: "Project sponsorship", text: "Support a defined initiative with an agreed purpose, scope and intended outcomes.", icon: "sponsorship" },
  { title: "Employee volunteering", text: "Explore suitable opportunities for employees to participate in community activities, subject to project requirements.", icon: "volunteering" },
  { title: "Resource support", text: "Discuss contributions of materials, services or other resources needed for a specific programme.", icon: "resource" },
  { title: "Long-term programmes", text: "Explore a tailored initiative or sustained collaboration aligned with your CSR priorities.", icon: "longterm" },
];

const steps = [
  { n: "01", title: "Understand your priorities", text: "Discuss your preferred causes, intended outcomes, project requirements and available resources." },
  { n: "02", title: "Define the project", text: "Identify community needs and agree on the activities, timelines, responsibilities and resource requirements." },
  { n: "03", title: "Coordinate implementation", text: "Organise project activities and relevant stakeholders according to the agreed scope." },
  { n: "04", title: "Document progress", text: "Share agreed updates and available results so your team can understand the activities undertaken and progress achieved." },
];

export function CsrHero() {
  return (
    <section className="border-b border-line bg-[#f5ece0]">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-8 lg:gap-10 px-6 py-8 md:py-10 lg:py-12 md:grid-cols-2">
        <div>
          <h1 className="text-[2.125rem] sm:text-[2.625rem] font-medium leading-[1.1] tracking-tight text-navy lg:text-[3.25rem]">
            Best NGO for CSR Partnerships: FeedU Foundation
          </h1>
          <p className="mt-6 max-w-md text-base leading-[1.3] text-muted">
            Partner with Feedu Foundation to connect your organisation&apos;s CSR priorities with community needs. We welcome
            collaborations in hunger relief, education, women&apos;s health, healthcare, environmental sustainability and legal awareness.
          </p>
          <p className="mt-4 max-w-md text-base leading-[1.3] text-muted">
            Whether you want to sponsor a specific initiative or explore a longer-term programme, we can discuss a partnership shaped
            around your objectives, available resources and the needs of the intended community.
          </p>
        </div>
        <Photo src="/images/csr-hero.jpg" alt="Student studying outdoors" className="aspect-[341/251] w-full" />
      </div>
    </section>
  );
}

export function CsrFocusAreas() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">Our CSR Focus Areas</h2>
          <p className="mx-auto mt-3 max-w-md text-base leading-[1.3] text-muted">
            A nourishing meal. A chance to learn. Support when it matters. Explore how we work towards dignity, opportunity and healthier communities.
          </p>
        </div>
        <ul className="mx-auto mt-8 md:mt-10 lg:mt-14 grid max-w-4xl gap-x-8 gap-y-10 md:grid-cols-2">
          {focus.map((f) => (
            <li key={f.title}>
              <Photo src={f.image} alt={f.title} className="aspect-[308/188] w-full border border-navy/60" />
              <h3 className="mt-5 text-[1.125rem] font-medium text-navy">{f.title}</h3>
              <p className="mt-2 text-base leading-[1.3] text-muted">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyPartner() {
  // Proportions follow the Figma frame: image ~46% / text ~54%, section height ≈ 39% of its width,
  // text kept to a readable column instead of stretching across the whole panel.
  return (
    <section className="border-b-4 border-gold bg-teal text-white">
      <div className="grid md:grid-cols-[46fr_54fr]">
        <Photo
          src="/images/csr-why-partner.jpg"
          alt="Children gathered at a community activity"
          className="min-h-64 md:min-h-[clamp(18.75rem,38.7vw,56rem)]"
        />
        <div className="flex flex-col justify-center px-6 py-10 md:px-[clamp(1.5rem,5vw,9rem)] md:py-12">
          <div className="max-w-xl">
            <h2 className="text-[2rem] md:text-[2.375rem] font-medium">Why Partner With Us</h2>
            <p className="mt-5 text-base leading-[1.3]">
              Choosing an NGO for CSR activities is an important decision. Corporate partners need to understand an organisation&apos;s focus
              areas, working approach and commitment to accountability.
            </p>
            <p className="mt-4 text-base leading-[1.3]">
              Organisations looking for the best CSR NGO in India should prioritise transparency, community impact and alignment with their
              CSR objectives. Feedu Foundation welcomes partnerships across diverse social causes through responsible implementation and
              transparent reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CsrWays() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">Ways To Participate</h2>
          <p className="mt-2 text-base text-muted">Bring what you can contribute.</p>
        </div>
        <ul className="mt-8 md:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => (
            <li key={w.title} className="rounded-md border border-gold bg-[#fdf3d4] p-4">
              <Image src={`/images/csr-${w.icon}.png`} alt="" width={32} height={32} className="h-8 w-8" />
              <h3 className="mt-5 text-navy text-[1.125rem]">{w.title}</h3>
              <p className="mt-2 text-base leading-[1.3] text-muted">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CsrSteps() {
  return (
    <section className="bg-navy py-10 md:py-12 lg:py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium">How The Partnership Works</h2>
          <p className="mt-3 text-base">Start with a simple conversation.</p>
        </div>
        <ol className="mt-8 md:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <span className="text-[1.625rem] lg:text-[1.875rem] text-gold">{s.n}</span>
              <h3 className="mt-4 font-medium text-[1.125rem]">{s.title}</h3>
              <p className="mt-2 text-base leading-[1.3] text-white/80">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CsrReporting() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">Transparent CSR Implementation and Impact Reporting</h2>
          <p className="mt-5 text-base leading-[1.3] text-muted">
            Transparency and accountability are central to meaningful CSR partnerships. Feedu Foundation emphasises responsible project
            documentation, beneficiary records, progress updates and outcome reporting, supported by relevant records and photographic
            evidence where appropriate.
          </p>
          <p className="mt-4 text-base leading-[1.3] text-muted">
            Our approach helps corporate partners track implementation, understand project outcomes and build trust through clear
            communication and accountability.
          </p>
        </div>
        <Photo src="/images/csr-reporting.jpg" alt="Children participating in a community activity" className="aspect-[330/280] w-full" />
      </div>
    </section>
  );
}

export function StartCsr() {
  return (
    <section className="bg-gold py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">Start A CSR Partnership</h2>
        <p className="mt-4 text-base leading-[1.3] text-navy/80">
          Tell us about your organisation, preferred focus area, proposed location, objectives and project requirements. Together, we can
          explore feasibility, implementation arrangements and the next steps for a suitable collaboration.
        </p>
        <p className="mt-3 text-base leading-[1.3] text-navy/80">
          Project availability depends on location, resources and programme requirements. Contact Feedu Foundation to discuss current
          implementation capabilities and partnership opportunities.
        </p>
        <Button href="/contact" className="mt-7 text-base">
          Discuss Your CSR Partnership
        </Button>
      </div>
    </section>
  );
}
