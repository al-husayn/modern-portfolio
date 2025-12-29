"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import CodeEditor from "./codeEditor";

import { Hole } from "@/components/backgrounds/hole/hole";

const scrollToWork = () => {
  const workSection = document.getElementById("work-section");

  if (workSection) workSection.scrollIntoView({ behavior: "smooth" });
};

const PortfolioHero = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-background">
      <Hole />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
      <div className="container z-10 px-4 mx-auto">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-12 xl:gap-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Side */}
          <div className="flex flex-col items-start gap-4 text-left sm:gap-6">
            
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Hello
              <br />
              I&apos;m{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
                Al-Hussein
              </span>
            </h1>

            <div className="max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl">
              <p className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
                Frontend Developer based in Kumasi, Ghana.
              </p>{" "}
              <br />
              With 3 years of experience building responsive, high-performance
              web applications using React, Next.js, TypeScript, and modern
              tools like Tailwind CSS and Shadcn. I specialize in creating
              clean, user-focused interfaces that load fast and scale well.
            </div>

            {/* Replaced Buttons from HeroSection */}
            <div className="flex flex-col items-center justify-center gap-3 mt-4 sm:flex-row sm:gap-4">
              <Link
                download
                aria-label="Download CV in PDF format"
                className="w-full sm:w-auto"
                href="/resume.pdf"
              >
                <Button
                  fullWidth
                  aria-label="Download CV"
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
            </div>
          </div>

          {/* Right Side */}
          <div>
            <CodeEditor />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
