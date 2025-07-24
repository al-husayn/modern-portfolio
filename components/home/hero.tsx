"use client";

import type { PressEvent } from "@react-aria/interactions";

import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { Hole } from "@/components/backgrounds/hole/hole";
import { DATA } from "@/data";

export const HeroSection = ({
  showBackground = true,
  name = DATA.home.hero.name,
  title = DATA.home.hero.title,
  subtitle = DATA.home.hero.subtitle,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      {showBackground && <Hole />}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container z-10 px-4 mx-auto">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I&apos;m {name} &mdash; I design &amp; code modern web
            experiences.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-lg leading-relaxed text-foreground-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}: {subtitle}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              download
              aria-label="Download CV in PDF format"
              className="w-full sm:w-auto"
              href="/new CV.pdf"
            >
              <Button
                fullWidth
                aria-label="Downoald CV"
                color="primary"
                endContent={<Icon icon="lucide:download" />}
                size="lg"
                variant="shadow"
              >
                Download CV
              </Button>
            </Link>
            <Button
              fullWidth
              aria-label="View Work"
              className="w-full sm:w-auto"
              color="primary"
              endContent={<Icon icon="lucide:arrow-down" />}
              size="lg"
              variant="bordered"
              onPress={scrollToWork}
            >
              View Work
            </Button>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};
