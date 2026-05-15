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
    <section className="site-section bg-content2/40">
      <div className="site-container">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText className="section-heading mb-4" text={sectionTitle} />
          <p className="section-copy">{sectionDescription}</p>
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
              <Card className="app-card app-card-hover w-full" radius="md">
                <CardBody className="flex flex-col items-center gap-5 p-8 text-center">
                  <img
                    alt={`${service.name} icon`}
                    className="h-24 w-24 object-contain drop-shadow-md"
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
