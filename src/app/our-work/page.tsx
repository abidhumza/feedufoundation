import type { Metadata } from "next";
import {
  WorkHero,
  WhyCausesMatter,
  FocusAreas,
  OurApproach,
  PurposeToParticipation,
} from "@/components/work/WorkSections";
import {
  VisionMissionCards,
  ContributeBand,
} from "@/components/about/AboutSections";

export const metadata: Metadata = {
  title: "Our Work | FeedU Foundation",
  description:
    "FeedU Foundation works across food, education, healthcare, legal awareness, environmental care and community connection to support underserved communities.",
};

export default function OurWorkPage() {
  return (
    <>
      <WorkHero />
      <WhyCausesMatter />
      <div className="pt-10 md:pt-14 lg:pt-20">
        <VisionMissionCards />
      </div>
      <FocusAreas />
      <OurApproach />
      <PurposeToParticipation />
      <ContributeBand variant="work" />
    </>
  );
}
