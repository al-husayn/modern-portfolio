"use client";
import { motion } from "framer-motion";

import { SplittingText } from "@/components/textAnimations/splitting-text";
import { TimelineItemProps } from "@/types/about";

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
    <motion.li className="relative mb-10 pl-8" variants={variants}>
      <span className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-4 border-stone-50 bg-zinc-950 dark:border-zinc-950 dark:bg-white" />

      <div className="surface-muted p-5">
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
          {title}
        </h3>
        {company && (
          <h6 className="mt-1 text-base font-medium text-stone-700 dark:text-stone-200">
            {company}
          </h6>
        )}
        {programme && (
          <h6 className="mt-1 text-base font-medium text-stone-700 dark:text-stone-200">
            {programme}
          </h6>
        )}

        <time className="mt-3 block text-sm font-medium text-stone-500 dark:text-stone-400">
          {date}
        </time>

        {isList ? (
          <ul className="mt-4 space-y-2 pl-5 text-sm leading-7 text-stone-600 dark:text-stone-300">
            {description.map((point) => (
              <li key={point} className="list-disc">
                {point}
              </li>
            ))}
          </ul>
        ) : (
          <SplittingText
            inView
            inViewOnce
            className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-300"
            delay={delay}
            text={typeof description === "string" ? description : ""}
            type="words"
          />
        )}
      </div>
    </motion.li>
  );
};
