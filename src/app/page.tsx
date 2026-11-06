import { Hero, Stats, Intro } from "@/components/home/HeroSections";
import { Programs, VisionMission } from "@/components/home/ProgramSections";
import CausesSection from "@/components/causes/CausesSection";
import { GetInvolved, CsrPartnership } from "@/components/home/EngageSections";
import { Transparency, Faq, FinalCta } from "@/components/home/TrustSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <Programs />
      <VisionMission />
      <CausesSection />
      <GetInvolved />
      <CsrPartnership />
      <Transparency />
      <Faq />
      <FinalCta />
    </>
  );
}
