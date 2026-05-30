import type { Metadata } from "next";

import { ProjectsPageClient } from "@/components/projects/projects-page-client";
import { DATA } from "@/data";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Projects",
  description: DATA.projects.sectionDescription,
  path: "/projects",
  keywords: DATA.projects.work.map((project) => project.title),
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
