import type { Metadata } from "next";
import {
  AboutHero,
  OurStory,
  VisionMissionCards,
  Values,
  ClearCommunication,
  PeopleAndSurroundings,
  ContributeBand,
} from "@/components/about/AboutSections";
import { FinalCta } from "@/components/home/TrustSections";

export const metadata: Metadata = {
  title: "About Us | FeedU Foundation",
  description:
    "FeedU Foundation brings people together to support communities through food, education, healthcare, skill development, legal awareness and environmental care.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VisionMissionCards />
      <Values />
      <ClearCommunication />
      <PeopleAndSurroundings />
      <ContributeBand />
      <FinalCta source="about" />
    </>
  );
}
