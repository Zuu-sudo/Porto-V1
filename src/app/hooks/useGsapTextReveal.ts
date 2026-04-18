"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGsapTextRevealOptions {
  stagger?: number;
  duration?: number;
  startY?: number;
  /** Pass a changing value (e.g. language) to re-trigger the animation */
  deps?: unknown[];
}

/**
 * Custom hook for GSAP text reveal animation
 * Splits text into characters and animates them with a 3D reveal effect
 */
export function useGsapTextReveal(
  ref: RefObject<HTMLElement | null>,
  options: UseGsapTextRevealOptions = {}
) {
  const { stagger = 0.05, duration = 0.8, startY = 50, deps = [] } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const text = element.innerText;
    const chars = text.split("");

    // Split text into individual spans
    element.innerHTML = chars
      .map((char) => {
        if (char === "\n") return "<br />";
        return `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`;
      })
      .join("");

    // Create GSAP animation
    const animation = gsap.fromTo(
      element.querySelectorAll("span"),
      {
        opacity: 0,
        y: startY,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, stagger, duration, startY, ...deps]);
}
