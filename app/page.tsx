import Portfolio from "@/components/home/portfolio";
import { ProofSection } from "@/components/home/proof-section";
import { ServicesSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";

export default function HomePage() {
  return (
    <>
      <Portfolio />
      <ProofSection />
      <ServicesSection />
      <WorkSection />
    </>
  );
}
