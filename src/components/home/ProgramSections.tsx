import Button from "@/components/Button";
import Photo from "@/components/Photo";
import { programs } from "@/lib/content";

export function Programs() {
  return (
    <section className="border-t border-line bg-cream py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy ">
              Different Needs. One Shared Purpose.
            </h2>
            <p className="mt-3 max-w-md text-base leading-[1.3] text-muted">
              A nourishing meal. A chance to learn. Support when it matters.
              Explore how we work towards dignity, opportunity and healthier
              communities.
            </p>
          </div>
          <Button href="/programs" className="self-start text-base lg:self-auto">
            Explore Our Initiatives
          </Button>
        </div>

        <ul className="mt-6 md:mt-8 lg:mt-10 grid gap-x-8 gap-y-8 lg:gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <li key={p.title}>
              <Photo
                src={p.image}
                alt={p.title}
                className="aspect-[254/138] w-full border border-navy"
              />
              <h3 className="mt-5 text-navy text-[1.125rem]">{p.title}</h3>
              <p className="mt-2 text-base leading-[1.3] text-muted">
                {p.description}
              </p>
              <Button href={p.href} variant="outline" className="mt-4 !px-3.5 !py-2 text-base">
                Learn More
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VisionMission() {
  return (
    <section className="border-b-4 border-gold bg-navy text-white">
      <div className="grid md:grid-cols-[1.4fr_1fr]">
        <div className="px-6 py-10 md:py-12 lg:py-14 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:pr-10">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight ">
            Support For Today.
            <br />
            Opportunities For Tomorrow.
          </h2>
          <p className="mt-4 max-w-md text-base leading-[1.3]">
            A meal can ease an immediate struggle. Education and practical
            skills can help someone take their next step towards independence.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-gold text-[1.125rem]">Our Vision</h3>
              <p className="mt-2 text-base leading-[1.3]">
                A society where everyone has access to dignity, opportunity,
                education, healthcare, justice and a safe environment.
              </p>
            </div>
            <div>
              <h3 className="text-gold text-[1.125rem]">Our Mission</h3>
              <p className="mt-2 text-base leading-[1.3]">
                To address the connected needs of people, communities and the
                environment through meaningful support and sustainable social
                development.
              </p>
            </div>
          </div>
        </div>
        <Photo
          src="/images/vision.jpg"
          alt="Children making heart shapes with their hands"
          className="min-h-52 md:min-h-64"
        />
      </div>
    </section>
  );
}
