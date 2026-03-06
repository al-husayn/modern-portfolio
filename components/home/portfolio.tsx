"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { DATA } from "@/data";

const socialPlatforms = new Set(["GitHub", "LinkedIn"]);

export default function PortfolioHero() {
  const { hero, highlights, coderProfile } = DATA.home;
  const socialLinks = DATA.footer.socialLinks.filter((link) =>
    socialPlatforms.has(link.platform),
  );

  return (
    <section className="section-shell pb-16 pt-12 sm:pt-16">
      <div className="section-inner">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45 }}
          >
            <p className="section-kicker">{highlights.badge}</p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-300">
              {hero.subtitle}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-500 dark:text-stone-400">
              {hero.summary}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-t border-stone-300 pt-4 dark:border-white/15"
                >
                  <p className="text-base font-semibold text-zinc-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-stone-200"
                href="/contact"
              >
                Contact me
                <Icon className="h-4 w-4" icon="lucide:arrow-up-right" />
              </Link>
              <a
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white dark:border-white/15 dark:text-white dark:hover:bg-zinc-900"
                href="/resume.pdf"
              >
                Download resume
                <Icon className="h-4 w-4" icon="lucide:download" />
              </a>
            </div>

            <div className="mt-10 space-y-3">
              {highlights.focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-stone-200 text-zinc-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-3.5 w-3.5" icon="lucide:check" />
                  </span>
                  <p className="text-sm leading-7 text-stone-600 dark:text-stone-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-white/10 dark:bg-zinc-900">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-zinc-950">
                <Image
                  fill
                  priority
                  alt={`${hero.name} portrait`}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  src="/AL.jpg"
                />
              </div>
              <div className="space-y-4 px-6 py-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                    {hero.location}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
                    {hero.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">
                    {hero.availability}
                  </p>
                </div>

                <div className="border-t border-stone-200 pt-4 dark:border-white/10">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">
                    Core stack
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">
                    {coderProfile.skills.join(" · ")}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      aria-label={link.platform}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-zinc-700 transition-colors hover:bg-stone-100 dark:border-white/15 dark:text-stone-200 dark:hover:bg-zinc-800"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon className="h-4 w-4" icon={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
