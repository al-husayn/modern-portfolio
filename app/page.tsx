import Portfolio from "../components/home/portfolio";

// import { HeroSection } from "@/components/home/hero";
import { SkillsOverviewSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";
import { TestimonialsSection } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      {/* <HeroSection /> */}
      <Portfolio/>
      <SkillsOverviewSection />
      <WorkSection />
      <TestimonialsSection />
    </>
  );
}
