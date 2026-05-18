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
    <footer className="site-section border-t border-divider bg-background/90 backdrop-blur-md">
      <motion.div
        className="site-container"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <Link
              aria-label="Go to homepage"
              className="mb-6 inline-flex items-center gap-3"
              href="/"
            >
              <img
                alt=""
                className="h-11 w-11 rounded-md object-contain"
                src="/logo.png"
              />
              <span className="text-lg font-semibold text-foreground">
                {name}
              </span>
            </Link>

            <h2 className="max-w-sm text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground-600">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  isIconOnly
                  aria-label={social.platform}
                  as="a"
                  className="border-default-200 bg-transparent text-foreground-600 hover:border-primary-400/50 hover:bg-primary-500/10 hover:text-primary-500"
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
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

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <li key={item.name}>
                      <Link
                        className="-ml-2 flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-foreground-600 transition-colors hover:bg-primary-500/10 hover:text-primary-500"
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

            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
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
          <p className="flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} {name}. made with
            <Icon
              aria-hidden="true"
              className="h-4 w-4 fill-primary-500 text-primary-500"
              icon="lucide:heart"
            />
            .
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
