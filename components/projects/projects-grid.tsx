import { useState } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { Project, ProjectsGridProps } from "@/types/projects";

export const ProjectsGrid = ({
  projects,
  className = "",
}: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${className}`}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ProjectCard
            project={project}
            onViewDetails={() => setSelectedProject(project)}
          />
        </motion.div>
      ))}

      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
