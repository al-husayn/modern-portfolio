"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "../section-header";
import { TimelineItem } from "../timelines/timeline-item";
import { containerVariants, itemVariants } from "../variants";
import { EducationItems } from "../types";

interface EducationTimelineProps {
  education: EducationItems;
}

export const EducationTimeline = ({ education }: EducationTimelineProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:school-outline" title="Education" />

    <motion.ol
      className="relative ml-6"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      <div className="absolute top-2 left-2 bottom-0 w-px bg-primary-500" />
      {education.map((item, idx) => (
        <TimelineItem
          key={idx}
          date={item.date}
          delay={idx * 300}
          description={item.description}
          programme={item.programme}
          title={item.title}
          variants={itemVariants}
        />
      ))}
    </motion.ol>
  </div>
);
