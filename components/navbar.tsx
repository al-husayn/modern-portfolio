"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";
import { cn } from "@/lib/utils";

const isExternalHref = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = useMemo(() => DATA.navigation, []);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/92 backdrop-blur dark:border-white/10 dark:bg-zinc-950/88">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          className="flex items-baseline gap-3"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-base font-semibold tracking-[0.24em] text-zinc-950 dark:text-white">
            AL-HUSSEIN
          </span>
          <span className="hidden text-sm text-stone-500 dark:text-stone-400 sm:inline">
            Frontend Engineer
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {menuItems.map((item) => {
            const isExternal = isExternalHref(item.href);
            const isActive = !isExternal && pathname === item.href;

            return (
              <Link
                key={item.name}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-zinc-950 dark:text-white"
                    : "text-stone-500 hover:text-zinc-950 dark:text-stone-400 dark:hover:text-white",
                )}
                href={item.href}
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeSwitcher />
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-zinc-950 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-950"
            href="/contact"
          >
            Contact
            <Icon className="h-4 w-4" icon="lucide:arrow-up-right" />
          </Link>
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-stone-200 md:hidden"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon
            className="h-5 w-5"
            icon={isMenuOpen ? "lucide:x" : "lucide:menu"}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-stone-200/80 bg-stone-50/96 dark:border-white/10 dark:bg-zinc-950/96 md:hidden"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Frontend roles, contract work, and collaborations
                </p>
                <ThemeSwitcher />
              </div>

              <nav className="grid gap-3">
                {menuItems.map((item) => {
                  const isExternal = isExternalHref(item.href);
                  const isActive = !isExternal && pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      className={cn(
                        "flex items-center justify-between border-b border-stone-200/80 py-3 text-sm font-medium dark:border-white/10",
                        isActive
                          ? "text-zinc-950 dark:text-white"
                          : "text-stone-600 dark:text-stone-300",
                      )}
                      href={item.href}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      target={isExternal ? "_blank" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <Icon
                        className="h-4 w-4"
                        icon={
                          isExternal
                            ? "lucide:arrow-up-right"
                            : "lucide:arrow-right"
                        }
                      />
                    </Link>
                  );
                })}
              </nav>

              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-950 px-4 py-3 text-sm font-semibold text-zinc-950 dark:border-white dark:text-white"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <Icon className="h-4 w-4" icon="lucide:arrow-up-right" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
