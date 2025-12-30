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

        {/* Grid: 2 cols mobile, 3 cols tablet+, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <Card className="w-full max-w-sm transition-all border bg-default-100/60 border-default-200 hover:border-primary/50 hover:shadow-xl">
                <CardBody className="flex flex-col items-center gap-6 p-10 text-center">
                  <img
                    alt={`${service.name} icon`}
                    className="w-28 h-28 object-contain drop-shadow-md"
                    src={service.logo}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.name}
                    </h3>
                    {service.description && (
                      <p className="mt-4 text-base text-foreground-500 leading-relaxed">
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