"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { DATA } from "@/data";

export const Footer = () => {
  const { name, description, contact, socialLinks, services } = DATA.footer;
  const navigation = DATA.navigation;

  return (
    <footer className="border-t site-section border-divider bg-background/90 ">
      <motion.div
        className="site-container"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1.85fr]">
          <div className="p-6 rounded-md sm:p-8">
            <Link
              aria-label="Go to homepage"
              className="inline-flex items-center gap-3 mb-6"
              href="/"
            >
              <img
                alt=""
                className="object-contain h-11 w-11 border-default-200"
                src="/logo.png"
              />
              <span className="text-lg font-semibold text-foreground">
                {name}
              </span>
            </Link>

            <h2 className="max-w-sm text-2xl font-semibold leading-tight text-foreground sm:text-3xl"> Get in Touch
            </h2>
            <p className="max-w-md mt-4 text-sm leading-relaxed text-foreground-600">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  isIconOnly
                  aria-label={social.platform}
                  as="a"
                  className="border-default-200 bg-content2 text-foreground-600 hover:border-primary-400/50 hover:text-primary-500"
                  href={social.url}
                  radius="md"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="bordered"
                >
                  <Icon className="w-5 h-5" icon={social.icon} />
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 rounded-md">
              <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="flex items-start gap-3 text-sm leading-relaxed text-foreground-600">
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                        icon="lucide:check"
                      />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-md">
              <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-foreground">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <li key={item.name}>
                      <Link
                        className="flex items-center gap-3 px-2 py-2 text-sm font-medium transition-colors rounded-md text-foreground-600 hover:bg-content2 hover:text-primary-500"
                        href={item.href}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        target={isExternal ? "_blank" : undefined}
                      >
                        <Icon className="w-4 h-4" icon={item.icon} />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="p-6 rounded-md">
              <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-foreground">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    className="flex items-start gap-3 text-sm leading-relaxed transition-colors text-foreground-600 hover:text-primary-500"
                    href={`mailto:${contact.email}`}
                  >
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                      icon="lucide:mail"
                    />
                    <span className="break-all">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-start gap-3 text-sm leading-relaxed transition-colors text-foreground-600 hover:text-primary-500"
                    href={`tel:${contact.phone}`}
                  >
                    <Icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                      icon="lucide:phone"
                    />
                    {contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground-600">
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-500"
                    icon="lucide:map-pin"
                  />
                  {contact.location}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 text-sm text-center border-t border-divider text-foreground-500">
          <p>
            © {new Date().getFullYear()} {name}. made with{" "}
            <Icon
              aria-label="love"
              className="inline w-4 h-4 text-primary-500"
              icon="lucide:heart"
            />
            .
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
