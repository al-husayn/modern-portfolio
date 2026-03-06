"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { SectionHeader } from "@/components/about/section-header";
import { capitalize } from "@/lib/utils";
import { TechCategories } from "@/types/about";

interface SkillsProps {
  tech: TechCategories;
}

export const Skills = ({ tech }: SkillsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SectionHeader icon="mdi:tools" title="Skills" />

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(tech).map(([category, { description, tools }]) => (
          <div key={category} className="surface-card p-6">
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
              {capitalize(category)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
              {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700 dark:border-white/10 dark:text-stone-200"
                >
                  <Icon className="h-4 w-4" icon={tool.icon} />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
