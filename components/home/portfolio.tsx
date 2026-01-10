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

            <div className="max-w-lg text-base leading-relaxed items-center text-gray-600 dark:text-gray-300 sm:text-lg lg:text-xl">
              <p className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
                Frontend Developer based in Kumasi, Ghana.
                <br/>
                Currently open to new opportunities.
              </p>{" "}
              <br />
              With 3+0 years of experience building responsive, high-performance web apps using React, Next.js, TypeScript, Tailwind CSS, and Shadcn.
              
              I specialize in clean, fast, user-focused interfaces that scale.
             
            </div>

            {/* Replaced Buttons from HeroSection */}
            <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-8 md:flex-row md:w-auto md:max-w-none md:mx-0 md:mt-10 md:gap-6">
              <Link
                download
                aria-label="Download CV in PDF format"
                className="w-full md:w-auto"
                href="/resume.pdf"
              >
                <Button
                  className="w-full md:w-auto justify-center min-h-14 px-8 text-base font-medium shadow-lg"
                  color="primary"
                  endContent={<Icon height={22} icon="lucide:download"  width={22}  />}
                  size="lg"
                  variant="shadow"
                >
                  Download CV
                </Button>
              </Link>
            
              <Button
                className="w-full md:w-auto justify-center min-h-14 px-8 text-base font-medium border-2 hover:border-primary/80"
                color="primary"
                endContent={<Icon height={22} icon="lucide:arrow-down" width={22} />}
                size="lg"
                variant="bordered"
                onPress={scrollToWork}
              >
                View Projects
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
