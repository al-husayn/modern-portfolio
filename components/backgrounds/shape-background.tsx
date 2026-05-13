"use client";

import type { CSSProperties, ComponentPropsWithoutRef } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type ShapeBackgroundProps = Omit<ComponentPropsWithoutRef<"div">, "children">;

type ShapeConfig = {
  id: string;
  className: string;
  delay: number;
  gradient: string;
  height: number;
  rotate: number;
  width: number;
};

type FloatingShapeProps = Omit<ShapeConfig, "id"> & {
  reduceMotion: boolean;
};

const SHAPES: ShapeConfig[] = [
  {
    id: "primary-ribbon",
    className: "left-[-32%] top-[12%] md:left-[-12%] md:top-[18%]",
    delay: 0.2,
    gradient: "from-primary-500/[0.18]",
    height: 140,
    rotate: 12,
    width: 620,
  },
  {
    id: "secondary-ribbon",
    className: "right-[-38%] top-[62%] md:right-[-10%] md:top-[66%]",
    delay: 0.4,
    gradient: "from-secondary-500/[0.18]",
    height: 120,
    rotate: -15,
    width: 520,
  },
  {
    id: "violet-accent",
    className: "bottom-[8%] left-[4%] md:left-[12%]",
    delay: 0.3,
    gradient: "from-violet-500/[0.14]",
    height: 82,
    rotate: -8,
    width: 320,
  },
  {
    id: "amber-accent",
    className: "right-[8%] top-[12%] md:right-[18%]",
    delay: 0.5,
    gradient: "from-amber-500/[0.14]",
    height: 64,
    rotate: 20,
    width: 220,
  },
  {
    id: "cyan-accent",
    className: "left-[18%] top-[4%] md:left-[28%]",
    delay: 0.6,
    gradient: "from-cyan-500/[0.14]",
    height: 44,
    rotate: -24,
    width: 160,
  },
];

const ENTRANCE_TRANSITION = {
  duration: 2.4,
  ease: [0.23, 0.86, 0.39, 0.96],
  opacity: { duration: 1.2 },
};

const FLOAT_TRANSITION = {
  duration: 12,
  ease: "easeInOut",
  repeat: Number.POSITIVE_INFINITY,
};

function FloatingShape({
  className,
  delay,
  gradient,
  height,
  reduceMotion,
  rotate,
  width,
}: FloatingShapeProps) {
  const size = { height, width } satisfies CSSProperties;

  return (
    <motion.div
      animate={{ opacity: 1, rotate, y: 0 }}
      className={cn("absolute", className)}
      initial={{ opacity: 0, rotate: rotate - 15, y: reduceMotion ? 0 : -120 }}
      transition={{ ...ENTRANCE_TRANSITION, delay }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 15, 0] }}
        className="relative"
        style={size}
        transition={FLOAT_TRANSITION}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full border-2 border-white/[0.14]",
            "bg-gradient-to-r to-transparent backdrop-blur-[2px]",
            "shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]",
            gradient,
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function ShapeBackground({ className, ...props }: ShapeBackgroundProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative size-full overflow-hidden bg-background",
        className,
      )}
      data-slot="shape-background"
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.08] via-transparent to-secondary-500/[0.08] blur-3xl" />

      {SHAPES.map((shape) => (
        <FloatingShape key={shape.id} reduceMotion={reduceMotion} {...shape} />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/80" />
    </div>
  );
}

const Shape = () => {
  return <ShapeBackground className="absolute inset-0" />;
};

export { Shape, ShapeBackground, type ShapeBackgroundProps };
