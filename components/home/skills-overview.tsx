"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

export const ServicesSection = () => {
  const { sectionTitle, sectionDescription, services } = DATA.home.skills;

  // Limit to exactly 6 services
  const displayedServices = services.slice(0, 6);

  return (
    <section className="bg-content1 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="mb-4 text-3xl font-bold md:text-4xl"
            text={sectionTitle}
          />
          <p className="max-w-2xl mx-auto text-lg text-foreground-600">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.name}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                className="w-full max-w-sm border border-default-200 bg-content2/70 shadow-sm transition-all hover:border-primary-400/60 hover:shadow-lg"
                radius="md"
              >
                <CardBody className="flex flex-col items-center gap-6 p-10 text-center">
                  <img
                    alt={`${service.name} icon`}
                    className="h-28 w-28 object-contain drop-shadow-md"
                    src={service.logo}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.name}
                    </h3>
                    {service.description && (
                      <p className="mt-4 text-base leading-relaxed text-foreground-500">
                        {service.description}
                      </p>
                    )}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
