"use client";

import Image from "next/image";
import { memo } from "react";
import { Icon } from "@iconify/react";

import { ProfileCardProps } from "@/types/about";

const profileHighlights = [
  "Frontend architecture",
  "Accessible UI systems",
  "Responsive product delivery",
];

export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
}: ProfileCardProps) {
  return (
    <div className="surface-card mb-12 overflow-hidden p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-stone-200/70 bg-stone-100 dark:border-white/10 dark:bg-zinc-950">
            <Image
              alt={`${name} portrait`}
              className="h-auto w-full object-cover"
              height={720}
              src={image}
              width={560}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent px-5 pb-5 pt-16 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Based in Kumasi, Ghana
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{name}</h2>
              <p className="mt-2 text-sm text-white/80">{title}</p>
            </div>
          </div>

          <div className="surface-muted p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              Focus
            </p>
            <div className="mt-4 space-y-3">
              {profileHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 text-zinc-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-4 w-4" icon="lucide:check" />
                  </span>
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <span className="section-kicker">Profile</span>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              {name}
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
              {title}
            </p>
          </div>

          <div className="space-y-4">
            {description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-stone-600 dark:text-stone-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
