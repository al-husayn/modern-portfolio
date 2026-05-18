"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

export const ServicesSection = () => {
  const { sectionTitle, sectionDescription, services } = DATA.home.skills;

  // Limit to exactly 6 services
  const displayedServices = services.slice(0, 6);

  return (
    <section className="site-section bg-content2/30">
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
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              transition={{
                delay: index * 0.08,
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card
                isHoverable
                className="app-card app-card-hover group h-full w-full"
                radius="md"
              >
                <CardBody className="flex h-full flex-col gap-6 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-primary-500/20 bg-primary-500/10 text-primary-500 transition-colors group-hover:border-primary-400/40 group-hover:bg-primary-500/15">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6"
                        icon={service.icon}
                      />
                    </div>
                    <span className="rounded-md border border-default-200 bg-content2 px-2.5 py-1 text-xs font-medium text-foreground-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
                      {service.name}
                    </h3>
                    {service.description && (
                      <p className="mt-3 text-sm leading-relaxed text-foreground-600">
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
