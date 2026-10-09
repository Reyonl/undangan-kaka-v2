import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { MotionValue } from "framer-motion";

export function useParallaxTransform(
  scrollYProgress: MotionValue<number>,
  distance: number
): number | MotionValue<number> {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return 0; // Static position when reduced motion is preferred
  }

  // Use useTransform here — this hook must be called unconditionally
  return useTransform(scrollYProgress, [0, 1], [0, -distance]);
}
