import type { Metadata } from "next";
import Button from "@/components/Button";
import Photo from "@/components/Photo";
import CausesSection from "@/components/causes/CausesSection";
import { Stats } from "@/components/home/HeroSections";
import { Faq } from "@/components/home/TrustSections";

export const metadata: Metadata = {
  title: "Donate | FeedU Foundation",
  description: "Choose a cause and make a difference today with FeedU Foundation.",
};

export default function DonatePage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:gap-8 lg:gap-10 px-6 py-8 md:py-10 lg:py-12 md:grid-cols-2">
          <div>
            <h1 className="text-[2.125rem] sm:text-[2.625rem] font-medium leading-[1.1] tracking-tight text-navy lg:text-[3.25rem]">
              Put Your Care Into Action.
            </h1>
            <p className="mt-6 max-w-md text-base leading-[1.3] text-muted">
              Join a community activity, support an initiative or explore a partnership with FeedU Foundation. Our
              programmes offer different ways to contribute through your time, skills and resources.
            </p>
            <div className="mt-8">
              <Button href="/our-work" variant="outline" className="text-base">
                See our Impact
              </Button>
            </div>
          </div>
          <Photo
            src="/images/donate-hero.jpg"
            alt="Volunteer feeding community dogs"
            className="aspect-[394/291] w-full"
          />
        </div>
      </section>
      <Stats />
      <CausesSection />
      <Faq />
    </>
  );
}
