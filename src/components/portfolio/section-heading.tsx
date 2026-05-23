"use client";

import { motion } from "framer-motion";
import { fadeUp, lineReveal } from "./motion";

type SectionHeadingProps = {
  title: string;
  align?: "left" | "right";
};

export function SectionHeading({
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp(0.04, 18)}
      initial="hidden"
      animate="show"
      className={`flex items-center gap-4 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {align === "right" ? <Line /> : null}
      <motion.h2
        variants={fadeUp(0.08, 14)}
        className="font-heading text-3xl font-semibold uppercase tracking-[0.16em] text-primary sm:text-[2rem]"
      >
        {title}
      </motion.h2>
      {align === "left" ? <Line /> : null}
    </motion.div>
  );
}

function Line() {
  return (
    <motion.span
      aria-hidden="true"
      variants={lineReveal}
      style={{ transformOrigin: "left center" }}
      className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(199,161,91,0),rgba(199,161,91,0.85),rgba(199,161,91,0))] sm:block"
    />
  );
}
