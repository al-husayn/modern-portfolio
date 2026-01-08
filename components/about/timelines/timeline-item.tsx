'use client';
import { motion } from "framer-motion";

import { SplittingText } from "@/components/textAnimations/splitting-text";
import { TimelineItemProps } from "@/components/about/types";

export const TimelineItem = ({
  title,
  company,
  programme,
  date,
  description,
  variants,
  delay = 0,
}: TimelineItemProps) => {
  const isList = Array.isArray(description);

  return (
    <motion.li className="mb-10 relative pl-6" variants={variants}>
      <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-4 h-4 border-2 border-background z-10" />

      <h3 className="text-lg font-extrabold">{title}</h3>
      {company && <h6 className="text-lg font-semibold">{company}</h6>}
      {programme && <h6 className="text-lg font-semibold">{programme}</h6>}

      <time className="block mb-1 text-sm text-primary-500">{date}</time>

      {isList ? (
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-4">
          {description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : (
        <SplittingText
          inView
          inViewOnce
          className="text-sm text-muted-foreground"
          delay={delay}
          text={typeof description === "string" ? description : ""}
          type="words"
        />
      )}
    </motion.li>
  );
};
