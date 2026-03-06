"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { Project } from "@/types/projects";
import { DATA } from "@/data";

export const WorkSection = () => {
  const { work, sectionTitle, sectionDescription } = DATA.projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section-shell pt-0" id="work-section">
      <div className="section-inner">
        <motion.div
          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-4">
            <span className="section-kicker">Work</span>
            <h2 className="section-title">{sectionTitle}</h2>
            <p className="section-copy">{sectionDescription}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-zinc-950 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-950"
              href="/projects"
            >
              Browse all work
              <Icon className="h-4 w-4" icon="lucide:arrow-right" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
              href="/contact"
            >
              Discuss a role
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {work.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
