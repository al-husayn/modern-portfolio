"use client";

import { Icon } from "@iconify/react";

import { SectionHeaderProps } from "@/types/about";

export const SectionHeader = ({
  icon,
  title,
  className = "",
}: SectionHeaderProps) => (
  <div className={`mb-6 flex items-center gap-3 ${className}`}>
    <div className="rounded-full border border-stone-300 p-3 text-zinc-950 dark:border-white/15 dark:text-white">
      <Icon className="text-xl" icon={icon} />
    </div>
    <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
      {title}
    </h2>
  </div>
);
