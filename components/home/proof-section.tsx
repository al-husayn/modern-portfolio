"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { DATA } from "@/data";

export const ProofSection = () => {
  const { proofPoints, highlights } = DATA.home;

  return (
    <section className="section-shell pt-0">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="section-kicker">Approach</p>
          <h2 className="mt-4 section-title">{proofPoints.sectionTitle}</h2>
          <p className="mt-4 section-copy">{proofPoints.sectionDescription}</p>

          <div className="mt-8 space-y-3">
            {highlights.collaboration.map((item) => (
              <p
                key={item}
                className="border-l border-stone-300 pl-4 text-sm leading-7 text-stone-600 dark:border-white/15 dark:text-stone-300"
              >
                {item}
              </p>
            ))}
          </div>

          <Link
            className="mt-8 inline-flex text-sm font-semibold text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
            href="/about"
          >
            Read more about my background
          </Link>
        </motion.div>

        <div className="border-t border-stone-200 dark:border-white/10">
          {proofPoints.items.map((item, index) => (
            <motion.div
              key={item.title}
              className="grid gap-3 border-b border-stone-200 py-6 md:grid-cols-[180px_1fr] dark:border-white/10"
              initial={{ opacity: 0, y: 18 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </p>
              <p className="text-sm leading-7 text-stone-600 dark:text-stone-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
