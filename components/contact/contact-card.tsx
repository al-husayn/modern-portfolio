import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

import { ContactCardProps } from "@/types/contact";

export const ContactCard = ({
  heading,
  tagline,
  children,
}: ContactCardProps) => (
  <motion.div
    className="mx-auto max-w-3xl"
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <Card className="app-card">
      <CardBody className="p-6 sm:p-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">{heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground-600">{tagline}</p>
        </div>
        {children}
      </CardBody>
    </Card>
  </motion.div>
);
