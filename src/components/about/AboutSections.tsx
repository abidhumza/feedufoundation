import Button from "@/components/Button";
import Photo from "@/components/Photo";

const values = [
  {
    title: "Dignity",
    text: "Treating people with respect and recognising their choices, experiences and potential.",
  },
  {
    title: "Community",
    text: "Bringing individuals, volunteers and organisations together around shared needs.",
  },
  {
    title: "Opportunity",
    text: "Supporting access to learning and practical skills that can expand people's choices.",
  },
  {
    title: "Environmental Care",
    text: "Recognising the connection between healthy communities and the natural spaces around them.",
  },
  {
    title: "Accountability",
    text: "Taking responsibility for the time, resources and contributions entrusted to us.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-gold px-3 py-1.5 text-sm text-navy">
      {children}
    </span>
  );
}

export function AboutHero() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-12 lg:py-14 text-center">
        <Pill>About FeedU Foundation</Pill>
        <h1 className="mt-5 text-[1.875rem] sm:text-4xl font-medium leading-tight tracking-tight text-navy lg:text-5xl">
          A Shared Commitment
          <br />
          To Stronger Communities.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.3] text-muted">
          FeedU Foundation brings people together to support communities
          through food, education, healthcare, skill development, legal
          awareness and environmental care.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/our-work" className="text-base">
            Explore Our Work
          </Button>
          <Button href="/contact" variant="outline" className="text-base">
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}

export function OurStory() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-8 lg:gap-10 px-6 md:grid-cols-2">
        <div>
          <Pill>Our Story</Pill>
          <h2 className="mt-3 text-[2rem] md:text-[2.375rem] font-medium text-navy">
            It Starts With Paying Attention.
          </h2>
          <p className="mt-5 text-base leading-[1.3] text-muted">
            A family facing food insecurity. A child without learning
            resources. A young person looking for practical skills. These needs
            may look different, but each can limit someone&apos;s choices and
            opportunities.
          </p>
          <p className="mt-4 text-base leading-[1.3] text-muted">
            FeedU Foundation began with a belief that responding to these
            challenges is a shared responsibility. Our work connects immediate
            support with opportunities for the future. Alongside food
            distribution and community support, we support learning, health
            awareness, access to guidance and care for the environment.
          </p>
        </div>
        <Photo
          src="/images/about-story.jpg"
          alt="Children from the community together"
          className="aspect-[420/265] w-full rounded-sm"
        />
      </div>
    </section>
  );
}

export function VisionMissionCards() {
  return (
    <section className="bg-white pb-10 md:pb-14 lg:pb-20">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-2">
        <div className="min-h-48 rounded-sm bg-navy p-6 text-white">
          <h2 className="text-[1.125rem] font-medium">Our Vision</h2>
          <p className="mt-5 text-base leading-[1.3]">
            Communities where everyone has the opportunity to learn, stay
            healthy, understand their rights and live with dignity in a safe
            environment.
          </p>
        </div>
        <div className="min-h-48 rounded-sm bg-teal p-6 text-white">
          <h2 className="text-[1.125rem] font-medium">Our Mission</h2>
          <p className="mt-5 text-base leading-[1.3]">
            To bring practical support and opportunities to underserved
            communities through initiatives that connect social welfare,
            empowerment and environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section className="bg-white pb-12 md:pb-16 lg:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Pill>Our Values</Pill>
          <h2 className="mt-3 text-[2rem] md:text-[2.375rem] font-medium text-navy">
            The Principles Behind Our Actions.
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-base text-muted">
            There&apos;s more than one way to make a difference. Choose how
            you&apos;d like to contribute.
          </p>
        </div>

        <ul className="mt-6 md:mt-8 lg:mt-10 flex flex-wrap justify-center gap-4">
          {values.map((v, i) => (
            <li
              key={v.title}
              className="min-h-40 w-full border border-navy/70 bg-cream p-5 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
            >
              <span className="text-[1.625rem] lg:text-[1.875rem] leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-medium text-navy text-[1.125rem]">{v.title}</h3>
              <p className="mt-3 text-base leading-[1.3] text-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ClearCommunication() {
  return (
    <section className="border-b-4 border-gold bg-navy text-white">
      <div className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="grid min-h-52 grid-cols-2 md:min-h-72">
          <Photo
            src="/images/support-communication-1.jpg"
            alt="Child receiving a meal package"
            className="h-full"
          />
          <Photo
            src="/images/support-communication-2.jpg"
            alt="Child receiving a care package"
            className="h-full"
          />
        </div>
        <div className="split-text-pad py-10 pl-6 md:py-12 md:pl-12 lg:py-14">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight">
            Your Support Deserves Clear Communication.
          </h2>
          <p className="mt-4 text-base leading-[1.3]">
            Whether you contribute a donation, your time or your
            organisation&apos;s resources, you deserve to understand the work
            you are supporting.
          </p>
          <p className="mt-3 text-base leading-[1.3]">
            We aim to communicate clearly about our initiatives, partnerships
            and use of resources. We welcome conversations with people who want
            to learn more before getting involved.
          </p>
          <Button href="/contact" variant="gold" className="mt-8 text-base font-semibold">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PeopleAndSurroundings() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">
          People And Their Surroundings Grow Together.
        </h2>
        <p className="mt-8 text-base leading-[1.3] text-muted">
          Our purpose is rooted in a simple idea: a community&apos;s well-being
          depends on more than one thing. Access to nourishment, education,
          health information and a safe environment all play a part.
        </p>
        <p className="mt-4 text-base leading-[1.3] text-muted">
          That is why our work spans several connected causes. We aim to
          support people in their present circumstances while helping create
          conditions for greater independence and well-being.
        </p>
      </div>
    </section>
  );
}

export function ContributeBand({ variant = "about" }: { variant?: "about" | "work" }) {
  return (
    <section className="bg-gold py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy">
          Bring Your Commitment. Find A Way To Contribute.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-navy/80">
          Support a cause, volunteer your skills or explore a partnership with
          FeedU Foundation.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button href="/contact" className="text-base">
            Become a Volunteer
          </Button>
          <Button
            href={variant === "work" ? "/donate" : "/contact"}
            variant="outline"
            className="!bg-transparent text-base hover:!bg-navy"
          >
            {variant === "work" ? "Donate Now" : "Partner with Us"}
          </Button>
        </div>
      </div>
    </section>
  );
}
