import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { ContactCardProps } from "@/types/contact";
import { DATA } from "@/data";

export const ContactCard = ({
  heading,
  tagline,
  children,
}: ContactCardProps) => {
  const { contact, socialLinks } = DATA.footer;

  return (
    <motion.div
      className="mx-auto max-w-5xl"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="surface-card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-stone-200 px-8 py-10 dark:border-white/10 lg:border-b-0 lg:border-r">
            <p className="section-kicker">Contact</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              {heading}
            </h1>
            <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300">
              {tagline}
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                className="flex items-center gap-3 text-stone-600 transition-colors hover:text-zinc-950 dark:text-stone-300 dark:hover:text-white"
                href={`mailto:${contact.email}`}
              >
                <Icon className="h-4 w-4" icon="lucide:mail" />
                {contact.email}
              </a>
              <a
                className="flex items-center gap-3 text-stone-600 transition-colors hover:text-zinc-950 dark:text-stone-300 dark:hover:text-white"
                href={`tel:${contact.phone}`}
              >
                <Icon className="h-4 w-4" icon="lucide:phone" />
                {contact.phone}
              </a>
              <div className="flex items-center gap-3 text-stone-600 dark:text-stone-300">
                <Icon className="h-4 w-4" icon="lucide:map-pin" />
                {contact.location}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  aria-label={social.platform}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-zinc-700 transition-colors hover:bg-stone-100 dark:border-white/15 dark:text-stone-200 dark:hover:bg-zinc-900"
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="h-4 w-4" icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};
