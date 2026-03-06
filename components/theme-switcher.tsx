"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        isIconOnly
        aria-label={
          mounted && isDark ? "Switch to light theme" : "Switch to dark theme"
        }
        className="h-10 w-10 rounded-full border border-stone-300 bg-white text-zinc-700 transition-colors hover:bg-stone-100 dark:border-white/15 dark:bg-zinc-900 dark:text-stone-200 dark:hover:bg-zinc-800"
        variant="light"
        onPress={() => setTheme(isDark ? "light" : "dark")}
      >
        <Icon
          className="h-5 w-5"
          icon={mounted && isDark ? "lucide:sun" : "lucide:moon"}
        />
      </Button>
    </motion.div>
  );
};
