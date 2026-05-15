"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import CodeEditor from "./codeEditor";

import { Shape } from "@/components/backgrounds/shape-background";
import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

const scrollToWork = () => {
  const workSection = document.getElementById("work-section");

  if (workSection) workSection.scrollIntoView({ behavior: "smooth" });
};

const PortfolioHero = () => {
  const { hero, resumePath } = DATA;

  return (
    <section className="relative isolate flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-background py-16 sm:py-20">
      <Shape />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="site-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)] lg:gap-14 xl:gap-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Side */}
          <div className="flex flex-col items-start gap-5 text-left sm:gap-6">
            <p className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-500">
              {hero.role} in {hero.location}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Hello
              <br />
              I&apos;m <GradientText text={hero.name} />
            </h1>

            <div className="max-w-xl text-base leading-relaxed text-foreground-600 sm:text-lg">
              <p className="font-medium text-foreground">{hero.status}</p>
              <p className="mt-4">
                With {hero.experience} of experience {hero.description} using{" "}
                {hero.techStack}. {hero.focus}
              </p>
            </div>

            <div className="mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row md:w-auto md:max-w-none">
              <Link
                download
                aria-label="Download CV in PDF format"
                className="w-full md:w-auto"
                href={resumePath}
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
                className="min-h-14 w-full justify-center px-8 text-base font-medium md:w-auto"
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
