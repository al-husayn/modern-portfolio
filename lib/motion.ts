import type * as React from 'react';
import type { ComponentPropsWithoutRef, ComponentType, RefAttributes, RefObject } from 'react';
import {
  motion as framerMotion,
  useInView as useFramerInView,
  type MotionProps,
  type UseInViewOptions,
} from 'framer-motion';

export type HTMLMotionProps<TagName extends keyof React.JSX.IntrinsicElements> = Omit<
  ComponentPropsWithoutRef<TagName>,
  keyof MotionProps
> &
  MotionProps;

type MotionComponent<
  TagName extends keyof React.JSX.IntrinsicElements,
  Element extends HTMLElement,
> = ComponentType<HTMLMotionProps<TagName> & RefAttributes<Element>>;

type TypedMotionComponents = {
  button: MotionComponent<'button', HTMLButtonElement>;
  div: MotionComponent<'div', HTMLDivElement>;
  form: MotionComponent<'form', HTMLFormElement>;
  h1: MotionComponent<'h1', HTMLHeadingElement>;
  iframe: MotionComponent<'iframe', HTMLIFrameElement>;
  li: MotionComponent<'li', HTMLLIElement>;
  ol: MotionComponent<'ol', HTMLOListElement>;
  p: MotionComponent<'p', HTMLParagraphElement>;
  span: MotionComponent<'span', HTMLSpanElement>;
};

const motion = framerMotion as Omit<typeof framerMotion, keyof TypedMotionComponents> &
  TypedMotionComponents;

function useInView(ref: RefObject<Element | null>, options?: UseInViewOptions) {
  return useFramerInView(ref as RefObject<Element>, options);
}

export { motion };
export { AnimatePresence, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
export { useInView };
export type {
  MotionProps,
  SpringOptions,
  TargetAndTransition,
  Transition,
  UseInViewOptions,
  Variant,
  Variants,
} from 'framer-motion';
