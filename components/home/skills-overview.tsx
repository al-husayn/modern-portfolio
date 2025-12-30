"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

export const TechStackSection = () => {
  const { sectionTitle, sectionDescription, technologies } = DATA.home.skills;

  return (
    <section className="py-20 bg-content1">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="mb-4 text-3xl font-bold md:text-4xl gradient"
            text={sectionTitle}
          />
          <p className="max-w-2xl mx-auto text-lg text-foreground-600">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="w-full transition-colors border max-w-40 bg-default-100/50 border-default-200 hover:border-primary">
                <CardBody className="flex flex-col items-center gap-4 p-8">
                  <img
                    alt={`${tech.name} logo`}
                    className="object-contain w-16 h-16"
                    src={tech.logo}
                  />
                  <p className="font-medium text-center text-foreground">
                    {tech.name}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};