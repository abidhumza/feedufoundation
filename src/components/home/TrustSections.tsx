import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Photo from "@/components/Photo";
import { faqs, principles } from "@/lib/content";

export function Transparency() {
  return (
    <section className="border-b-4 border-gold bg-navy py-20 md:py-24 lg:py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight ">
            Give With <span className="text-gold">Confidence,</span> Our
            Commitment To Transparency
          </h2>
          <p className="text-base leading-[1.3]">
            When you contribute your money, time or resources, you deserve to
            understand how they support our work. We aim to maintain clear
            communication about our initiatives, partnerships and the impact
            we work towards.{" "}
            <span className="text-gold">Trust is something we work to earn.</span>
          </p>
        </div>

        <ul className="mt-6 md:mt-8 lg:mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.title}>
              <Photo
                src={p.image}
                alt={p.title}
                className="aspect-[255/138] w-full border border-gold"
              />
              <h3 className="mt-5 text-[1.125rem]">{p.title}</h3>
              <p className="mt-1 text-base leading-[1.3]">{p.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 md:mt-8 lg:mt-10 text-center">
          <Button href="/contact" variant="gold" className="text-base font-semibold">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

type FaqItem = { q: string; a: string };

export function Faq({ items = faqs, subtitle = "A few questions before you join us." }: { items?: FaqItem[]; subtitle?: string }) {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium text-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base text-muted">
            {subtitle}
          </p>
        </div>

        <FaqList items={items} />
      </div>
    </section>
  );
}

export function FinalCta({ source = "home" }: { source?: "home" | "about" }) {
  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-start gap-6 md:gap-8 lg:gap-10 px-6 py-10 md:py-12 lg:py-14 md:grid-cols-2">
        <div className="md:pt-4">
          <h2 className="text-[2rem] md:text-[2.375rem] font-medium leading-tight text-navy ">
            Take The First Step Towards Helping Someone Take Theirs.
          </h2>
          <p className="mt-3 max-w-sm text-base leading-[1.3] text-muted">
            Whether you want to donate, volunteer, celebrate an occasion or
            discuss a partnership, we&apos;d love to hear from you.
          </p>
          <Button href="/csr" className="mt-6 text-base">
            Discuss a CSR Partnership
          </Button>
        </div>
        <ContactForm source={source} />
      </div>
    </section>
  );
}
