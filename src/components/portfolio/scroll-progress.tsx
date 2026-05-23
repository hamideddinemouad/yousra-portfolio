"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 22,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-[linear-gradient(90deg,var(--accent),rgba(199,161,91,0.25))] shadow-[0_3px_18px_rgba(199,161,91,0.35)]"
      style={{ scaleX }}
    />
  );
}
