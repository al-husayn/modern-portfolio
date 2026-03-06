"use client";

import { useState, useMemo } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { DATA } from "@/data";

const ProjectsPage = () => {
  const allProjects = DATA.projects.work;

  const categories = useMemo(
    () => ["All", ...new Set(allProjects.map((project) => project.category))],
    [allProjects],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory,
          ),
    [selectedCategory, allProjects],
  );

  return (
    <section className="section-shell">
      <div className="section-inner">
        <PageHeader className="mb-6" texts={DATA.morphingTexts.projects} />
        <p className="section-copy mb-10 max-w-3xl">
          Real public work, open-source projects, and product-facing builds that
          better reflect how I approach frontend delivery.
        </p>

        <ProjectsTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
