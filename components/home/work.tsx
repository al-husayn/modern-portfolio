"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { GradientText } from "@/components/textAnimations/gradient-text";
import { Project } from "@/types/projects";
import { DATA } from "@/data";

export const WorkSection = () => {
  const { work } = DATA.projects;
  const { sectionTitle, sectionDescription } = DATA.projects;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="bg-background py-20" id="work-section">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="mb-4 text-3xl font-bold md:text-4xl"
            text={sectionTitle}
          />
          <p className="mx-auto max-w-2xl text-lg text-foreground-600">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              className="w-full md:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard
                project={project}
                onViewDetails={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

