"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import CodeEditor from "./codeEditor";

import { Shape } from "@/components/backgrounds/shape-background";
import { GradientText } from "@/components/textAnimations/gradient-text";

const scrollToWork = () => {
  const workSection = document.getElementById("work-section");

  if (workSection) workSection.scrollIntoView({ behavior: "smooth" });
};

const PortfolioHero = () => {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-background">
      <Shape />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-transparent to-background" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-12 xl:gap-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Side */}
          <div className="flex flex-col items-start gap-5 text-left sm:gap-6">
            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Hello
              <br />
              I&apos;m{" "}
              <GradientText text="Al-Hussein" />
            </h1>

            <div className="max-w-lg text-base leading-relaxed text-foreground-600 sm:text-lg lg:text-xl">
              <p className="font-medium text-primary-500">
                Frontend Developer based in Kumasi, Ghana.
                <br />
                Currently open to new opportunities.
              </p>{" "}
              <br />
              With 3+ years of experience building responsive, high-performance
              web apps using React, Next.js, TypeScript, Tailwind CSS, and
              Shadcn.
              I specialize in clean, fast, user-focused interfaces that scale.
            </div>

            <div className="flex flex-col w-full max-w-md gap-4 mx-auto mt-8 md:flex-row md:w-auto md:max-w-none md:mx-0 md:mt-10 md:gap-6">
              <Link
                download
                aria-label="Download CV in PDF format"
                className="w-full md:w-auto"
                href="/resume.pdf"
              >
                <Button
                  className="justify-center w-full px-8 text-base font-medium shadow-lg md:w-auto min-h-14"
                  color="primary"
                  endContent={
                    <Icon height={22} icon="lucide:download" width={22} />
                  }
                  size="lg"
                  variant="shadow"
                >
                  Download CV
                </Button>
              </Link>

              <Button
                className="justify-center w-full px-8 text-base font-medium border-2 md:w-auto min-h-14 hover:border-primary/80"
                color="primary"
                endContent={
                  <Icon height={22} icon="lucide:arrow-down" width={22} />
                }
                size="lg"
                variant="bordered"
                onPress={scrollToWork}
              >
                View Projects
              </Button>
            </div>
          </div>

          <div>
            <CodeEditor />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
