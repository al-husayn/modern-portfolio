"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { DATA } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = DATA.navigation;
  const isActiveItem = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Navbar
      isBordered
      className="border-b border-divider bg-background/80 backdrop-blur-md"
      height="64px"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex items-center justify-between w-full">
        <NavbarBrand>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              aria-label="Go to homepage"
              className="inline-flex items-center"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                alt="Logo"
                className="h-11 w-11 rounded-md object-contain"
                src="/logo.png"
              />
            </Link>
          </motion.div>
        </NavbarBrand>

        <NavbarContent className="justify-center flex-grow hidden gap-6 sm:flex">
          {menuItems.map((item, index) => (
            <NavbarItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  aria-current={isActiveItem(item.href) ? "page" : undefined}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors ${
                    isActiveItem(item.href)
                      ? "bg-primary-500/10 text-primary-500"
                      : "text-foreground-600 hover:bg-content2 hover:text-foreground"
                  }`}
                  href={item.href}
                >
                  <Icon className="h-4 w-4" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/95 pt-6 backdrop-blur-lg sm:hidden">
        <div className="max-w-lg mx-auto space-y-4">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={item.name}>
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  aria-current={isActiveItem(item.href) ? "page" : undefined}
                  className={`flex w-full items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                    isActiveItem(item.href)
                      ? "bg-primary-500/10 text-primary-500"
                      : "text-foreground-600 hover:bg-content2 hover:text-foreground"
                  }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" icon={item.icon} />
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
