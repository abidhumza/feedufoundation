import Image from "next/image";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import { involvement } from "@/lib/content";

export function Icon({ name }: { name: (typeof involvement)[number]["icon"] }) {
  return (
    <Image
      src={`/images/icon-${name}.png`}
      alt=""
      width={64}
      height={64}
      className={name === "celebrate" ? "h-16 w-auto" : "h-auto w-14 sm:h-16 sm:w-auto"}
    />
  );
}

export function GetInvolved() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-left sm:text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">Get Involved</h2>
          <p className="mt-4 max-w-lg sm:mx-auto text-base text-muted">
            There&apos;s more than one way to make a difference. Choose how
            you&apos;d like to contribute.
          </p>
        </div>

        <ul className="mt-8 md:mt-10 lg:mt-14 grid gap-x-6 gap-y-12 sm:gap-y-6 md:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">
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

export function CsrPartnership() {
  return (
    <section className="border-t border-line bg-cream">
      <div className="grid md:grid-cols-[1fr_1.15fr]">
        <Photo
          src="/images/csr.jpg"
          alt="Volunteers packing relief kits with children"
          className="min-h-52 md:min-h-72"
        />
        <div className="split-text-pad py-10 pl-6 md:py-12 md:pl-12 lg:py-14">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy ">
            Bring Your Organisation&apos;s Commitment To Life.
          </h2>
          <p className="mt-5 text-base leading-[1.3] text-muted">
            Partner with FeedU Foundation to shape meaningful CSR initiatives
            around community needs.
          </p>
          <p className="mt-3 text-base leading-[1.3] text-muted">
            From food distribution and education support to healthcare, skill
            development and environmental activities, we welcome
            collaborations rooted in care, accountability and responsible use
            of resources.
          </p>
          <Button href="/csr" className="mt-8 text-base">
            Discuss a CSR Partnership
          </Button>
        </div>
      </div>
    </section>
  );
}
