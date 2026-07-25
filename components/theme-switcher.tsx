"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "@/lib/motion";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isThemeReady = mounted && resolvedTheme !== undefined;
  const isDark = isThemeReady && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        isDisabled={!isThemeReady}
        isIconOnly
        aria-label="Toggle theme"
        className="text-foreground-600"
        radius="md"
        variant="flat"
        onPress={() => {
          if (!isThemeReady) return;
          setTheme(isDark ? "light" : "dark");
        }}
      >
        <Icon
          className="w-5 h-5"
          icon={
            mounted ? (isDark ? "lucide:sun" : "lucide:moon") : "lucide:moon"
          }
        />
      </Button>
    </motion.div>
  );
};
