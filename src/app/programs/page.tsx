import type { Metadata } from "next";
import {
  ProgrammesHero,
  InitiativeList,
  WaysToParticipate,
  HowItWorks,
  ReadyToTakePart,
} from "@/components/programmes/ProgrammesSections";
import { Stats } from "@/components/home/HeroSections";
import { Faq } from "@/components/home/TrustSections";

export const metadata: Metadata = {
  title: "Our Programmes | FeedU Foundation",
  description:
    "Join a community activity, support an initiative or explore a partnership with FeedU Foundation through your time, skills and resources.",
};

export default function ProgrammesPage() {
  return (
    <>
      <ProgrammesHero />
      <Stats />
      <InitiativeList />
      <WaysToParticipate />
      <HowItWorks />
      <Faq />
      <ReadyToTakePart />
    </>
  );
}
