import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { education, experience, profile } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="section-shell">
      <div className="section-inner max-w-5xl text-foreground">
        <PageHeader texts={DATA.morphingTexts.about} />
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
