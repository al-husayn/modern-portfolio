"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { DATA } from "@/data";

const isExternalHref = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

export const Footer = () => {
  const { name, description, contact, socialLinks } = DATA.footer;

  return (
    <footer className="section-shell pb-10 pt-0">
      <div className="section-inner border-t border-stone-200 pt-10 dark:border-white/10">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="section-kicker">Available for work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Let&apos;s build something useful
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-stone-600 dark:text-stone-300">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                className="text-sm font-semibold text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
              <a
                className="text-sm font-semibold text-zinc-950 underline decoration-stone-300 underline-offset-4 dark:text-white dark:decoration-white/20"
                href="/resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              Navigation
            </p>
            <div className="mt-5 space-y-3">
              {DATA.navigation.map((item) => {
                const isExternal = isExternalHref(item.href);

                return (
                  <Link
                    key={item.name}
                    className="block text-sm text-stone-600 transition-colors hover:text-zinc-950 dark:text-stone-300 dark:hover:text-white"
                    href={item.href}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    target={isExternal ? "_blank" : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              Elsewhere
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  aria-label={social.platform}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-zinc-700 transition-colors hover:bg-white dark:border-white/15 dark:text-stone-200 dark:hover:bg-zinc-900"
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="h-4 w-4" icon={social.icon} />
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-stone-600 dark:text-stone-300">
              {contact.location}
            </p>
          </div>
        </motion.div>

        <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500 dark:border-white/10 dark:text-stone-400">
          © {new Date().getFullYear()} {name}
        </div>
      </div>
    </footer>
  );
};
