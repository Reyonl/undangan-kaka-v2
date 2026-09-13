"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number; // Typing speed per character (ms)
  delay?: number; // Delay before typing starts (ms)
}

export function TypewriterEffect({
  text,
  className,
  speed = 40,
  delay = 0,
}: TypewriterEffectProps) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLength(text.length);
      setIsComplete(true);
      return;
    }

    if (isInView) {
      const startTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayedLength((prev) => {
            if (prev >= text.length) {
              clearInterval(interval);
              // Let the cursor blink for a moment before fading out smoothly
              setTimeout(() => setIsComplete(true), 1500);
              return text.length;
            }
            return prev + 1;
          });
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, text, speed, delay, prefersReducedMotion]);

  // Use Array.from to properly split emojis and special characters if any
  const chars = Array.from(text);

  return (
    <span ref={ref} className={cn("relative", className)}>
      {chars.map((char, index) => {
        const isVisible = index < displayedLength;
        const isCurrent = index === displayedLength - 1;
        const isInitialCursor = displayedLength === 0 && index === 0;

        return (
          <span
            key={index}
            className={cn(
              "relative",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Initial cursor before typing starts */}
            {isInitialCursor && !isComplete && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 top-[10%] bottom-[10%] w-[1.5px] bg-current"
              />
            )}

            {char}

            {/* Blinking cursor following the text */}
            {isCurrent && !isComplete && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute -right-[1px] top-[10%] bottom-[10%] w-[1.5px] bg-current"
              />
            )}
          </span>
        );
      })}
    </span>
  );
}
