import Portfolio from "@/components/home/portfolio";
import { ServicesSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";
import { TestimonialsSection } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <Portfolio />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
    </>
  );
}
