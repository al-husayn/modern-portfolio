"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Testimonial } from "@/types/testimonials";

export const useTestimonials = (items: readonly Testimonial[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const resetAutoPlay = useCallback(() => {
    setIsAutoPlaying(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => nextTestimonial(), 5000);
  }, [nextTestimonial]);

  const handleNavigation = useCallback(
    (callback: () => void) => {
      callback();
      resetAutoPlay();
    },
    [resetAutoPlay],
  );

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => nextTestimonial(), 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, nextTestimonial]);

  return {
    currentIndex,
    direction,
    nextTestimonial,
    prevTestimonial,
    setCurrentIndex,
    handleNavigation,
  };
};
