import type { Metadata } from 'next';

import { ProjectsPageClient } from '@/components/projects/projects-page-client';
import { DATA } from '@/data';
import { createSeoMetadata } from '@/lib/seo';

const { projects } = DATA;

export const metadata: Metadata = createSeoMetadata({
  title: 'Projects',
  description: projects.sectionDescription,
  path: '/projects',
  keywords: projects.work.map((project) => project.title),
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
