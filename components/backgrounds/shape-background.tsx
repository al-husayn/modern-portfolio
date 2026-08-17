'use client';

import type { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { motion, type Transition, useReducedMotion } from '@/lib/motion';

import { cn } from '@/lib/utils';

type ShapeBackgroundProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

type ShapeConfig = {
  id: string;
  className: string;
  delay: number;
  color: string;
  height: number;
  rotate: number;
  width: number;
};

type FloatingShapeProps = Omit<ShapeConfig, 'id'> & {
  reduceMotion: boolean;
};

const SHAPES: ShapeConfig[] = [
  {
    id: 'primary-ribbon',
    className: 'left-[-32%] top-[12%] md:left-[-12%] md:top-[18%]',
    delay: 0.2,
    color: 'bg-primary-500/15',
    height: 140,
    rotate: 12,
    width: 620,
  },
  {
    id: 'secondary-ribbon',
    className: 'right-[-38%] top-[62%] md:right-[-10%] md:top-[66%]',
    delay: 0.4,
    color: 'bg-secondary-500/15',
    height: 120,
    rotate: -15,
    width: 520,
  },
  {
    id: 'violet-accent',
    className: 'bottom-[8%] left-[4%] md:left-[12%]',
    delay: 0.3,
    color: 'bg-violet-500/15',
    height: 82,
    rotate: -8,
    width: 320,
  },
  {
    id: 'amber-accent',
    className: 'right-[8%] top-[12%] md:right-[18%]',
    delay: 0.5,
    color: 'bg-amber-500/15',
    height: 64,
    rotate: 20,
    width: 220,
  },
  {
    id: 'cyan-accent',
    className: 'left-[18%] top-[4%] md:left-[28%]',
    delay: 0.6,
    color: 'bg-cyan-500/15',
    height: 44,
    rotate: -24,
    width: 160,
  },
];

const ENTRANCE_TRANSITION = {
  duration: 2.4,
  ease: [0.23, 0.86, 0.39, 0.96],
  opacity: { duration: 1.2 },
} satisfies Transition;

const FLOAT_TRANSITION = {
  duration: 12,
  ease: 'easeInOut',
  repeat: Number.POSITIVE_INFINITY,
} satisfies Transition;

function FloatingShape({
  className,
  delay,
  color,
  height,
  reduceMotion,
  rotate,
  width,
}: FloatingShapeProps) {
  const size = { height, width } satisfies CSSProperties;

  const entranceTransition = reduceMotion
    ? { duration: 0, delay }
    : { ...ENTRANCE_TRANSITION, delay };

  const initialStyle = {
    opacity: 0,
    transform: `translateY(-24px) rotate(${rotate - 15}deg)`,
  } satisfies CSSProperties;

  return (
    <motion.div
      animate={{ opacity: 1, rotate, y: 0 }}
      className={cn('absolute', className)}
      initial={false}
      style={initialStyle}
      transition={entranceTransition}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 15, 0] }}
        className="relative"
        style={size}
        transition={FLOAT_TRANSITION}
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full border-2 border-white/[0.14]',
            'backdrop-blur-[2px]',
            'shadow-[0_8px_32px_rgba(255,255,255,0.1)]',
            color,
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
        'pointer-events-none relative size-full overflow-hidden bg-background',
        className,
      )}
      data-slot="shape-background"
      {...props}
    >
      {SHAPES.map((shape) => (
        <FloatingShape key={shape.id} reduceMotion={reduceMotion} {...shape} />
      ))}
    </div>
  );
}

const Shape = () => {
  return <ShapeBackground className="absolute inset-0" />;
};

export { Shape, ShapeBackground, type ShapeBackgroundProps };
