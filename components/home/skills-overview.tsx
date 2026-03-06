"use client";

import { motion } from "framer-motion";

import { DATA } from "@/data";

export const ServicesSection = () => {
  const { sectionTitle, sectionDescription, services } = DATA.home.skills;

  return (
    <section className="section-shell pt-0">
      <div className="section-inner">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="section-kicker">Capabilities</p>
          <h2 className="mt-4 section-title">{sectionTitle}</h2>
          <p className="mt-4 section-copy">{sectionDescription}</p>
        </motion.div>

        <div className="border-t border-stone-200 dark:border-white/10">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              className="grid gap-3 border-b border-stone-200 py-6 md:grid-cols-[240px_1fr] dark:border-white/10"
              initial={{ opacity: 0, y: 18 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                {service.name}
              </h3>
              <p className="text-sm leading-7 text-stone-600 dark:text-stone-300">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
