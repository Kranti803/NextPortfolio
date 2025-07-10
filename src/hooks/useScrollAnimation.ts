"use client";
import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}


export const useScrollAnimation = (options: ScrollAnimationOptions) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once) observer.unobserve(elem);
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold || 0.2,
      }
    );

    observer.observe(elem);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
};
