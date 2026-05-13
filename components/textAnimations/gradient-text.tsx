import * as React from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

import { cn } from "../../lib/utils";

const BRAND_GRADIENT =
  "linear-gradient(90deg, #006FEE 0%, #17C964 35%, #9353D3 70%, #006FEE 100%)";

type GradientTextProps = React.ComponentProps<"span"> & {
  text: string;
  gradient?: string;
  neon?: boolean;
  transition?: Transition;
};

function GradientText({
  text,
  className,
  gradient = BRAND_GRADIENT,
  neon = false,
  transition = { duration: 50, repeat: Infinity, ease: "linear" },
  ...props
}: GradientTextProps) {
  const reduceMotion = useReducedMotion();
  const baseStyle: React.CSSProperties = {
    backgroundImage: gradient,
  };
  const animation = reduceMotion
    ? { backgroundPosition: "0% 0%" }
    : { backgroundPosition: "500% 100%" };

  return (
    <span
      className={cn("relative inline-block", className)}
      data-slot="gradient-text"
      {...props}
    >
      <motion.span
        animate={animation}
        className="m-0 text-transparent bg-clip-text bg-[length:700%_100%] bg-[position:0%_0%]"
        initial={{ backgroundPosition: "0% 0%" }}
        style={baseStyle}
        transition={reduceMotion ? undefined : transition}
      >
        {text}
      </motion.span>

      {neon && (
        <motion.span
          animate={animation}
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:700%_100%] bg-[position:0%_0%]"
          initial={{ backgroundPosition: "0% 0%" }}
          style={baseStyle}
          transition={reduceMotion ? undefined : transition}
        >
          {text}
        </motion.span>
      )}
    </span>
  );
}

export { GradientText, type GradientTextProps };
