"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { DATA } from "@/data";

export const Footer = () => {
  const { name, description, contact, socialLinks, services } = DATA.footer;

  return (
    <footer className="site-section border-t border-divider bg-background/80 backdrop-blur-md">
      <motion.div
        className="site-container"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Get in Touch
            </h3>
            <p className="mb-4 text-foreground-600">{description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  isIconOnly
                  aria-label={social.platform}
                  as="a"
                  href={social.url}
                  radius="md"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="flat"
                >
                  <Icon className="h-5 w-5" icon={social.icon} />
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-foreground-600">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-foreground-600">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" />
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-divider pt-8 text-center text-foreground-500">
          <p>
            © {new Date().getFullYear()} {name}. made with &hearts;.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
