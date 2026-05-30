import type { Metadata } from "next";

import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "About",
  description: DATA.about.profile.description[0],
  path: "/about",
  image: "/AL.jpg",
  keywords: [
    DATA.about.profile.title,
    ...DATA.about.technologies.frontend.tools.map((tool) => tool.name),
    ...DATA.about.technologies.backend.tools.map((tool) => tool.name),
  ],
});

export default function AboutPage() {
  const { education, experience, profile } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="site-section text-foreground">
      <div className="mx-auto max-w-5xl">
        <PageHeader {...DATA.pageHeaders.about} />
        <ProfileCard
          description={profile.description}
          image={profile.image}
          name={profile.name}
          title={profile.title}
        />

        <ExperienceTimeline experience={experience} />
        <EducationTimeline education={education} />
        <Skills tech={tech} />
      </div>
    </section>
  );
}
