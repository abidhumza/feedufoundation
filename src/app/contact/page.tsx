import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | FeedU Foundation",
  description: "Get in touch with FeedU Foundation to donate, volunteer or discuss a partnership.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 py-10 md:py-14 lg:py-16 md:grid-cols-2">
        <div className="md:pt-4">
          <h1 className="text-[1.875rem] sm:text-4xl font-medium leading-tight tracking-tight text-navy lg:text-5xl">
            Let&apos;s Talk.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-[1.3] text-muted">
            Whether you want to donate, volunteer, celebrate an occasion or discuss a partnership, we&apos;d love to hear from you.
          </p>
        </div>
        <ContactForm source="contact" />
      </div>
    </section>
  );
}
