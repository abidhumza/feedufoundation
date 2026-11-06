import type { Metadata } from "next";
import { Faq } from "@/components/home/TrustSections";
import { csrFaqs } from "@/lib/content";
import { Stats } from "@/components/home/HeroSections";
import { CsrHero, CsrFocusAreas, WhyPartner, CsrWays, CsrSteps, CsrReporting, StartCsr } from "@/components/csr/CsrSections";

export const metadata: Metadata = {
  title: "CSR Partnerships | FeedU Foundation",
  description:
    "Partner with FeedU Foundation to connect your organisation's CSR priorities with community needs in hunger relief, education, health, environment and legal awareness.",
};

export default function CsrPage() {
  return (
    <>
      <CsrHero />
      <Stats />
      <CsrFocusAreas />
      <WhyPartner />
      <CsrWays />
      <CsrSteps />
      <CsrReporting />
      <Faq items={csrFaqs} subtitle="Common questions about CSR partnerships with FeedU Foundation." />
      <StartCsr />
    </>
  );
}
