"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

export const SkillsOverviewSection = () => {
  const overview = DATA.home.skills.overview;
  const { sectionTitle, sectionDescription } = DATA.home.skills;

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

        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {overview.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="border-none shadow-md ">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-${skill.color}-100`}>
                      <Icon
                        className={`w-6 h-6 text-${skill.color}-500`}
                        icon={skill.icon}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <p className="text-foreground-600">{skill.level}%</p>
                    </div>
                  </div>
                  <Progress
                    className="h-2"
                    color={skill.color}
                    value={skill.level}
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
