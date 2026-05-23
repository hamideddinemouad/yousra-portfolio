"use client";

import { Experience } from "@/types/portfolio";
import { motion } from "framer-motion";
import { gentleTap, listItem, staggerGroup } from "./motion";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <motion.article
      variants={listItem}
      whileHover={{
        y: -6,
        boxShadow: "0 18px 40px rgba(50, 70, 59, 0.14)",
      }}
      whileTap={gentleTap}
      className="motion-card tilt-sheen rounded-[1.5rem] border border-[rgba(217,201,175,0.7)] bg-white/75 p-6 shadow-[0_10px_30px_rgba(50,70,59,0.08)]"
    >
      <motion.header variants={staggerGroup(0.03, 0.06)} className="space-y-2">
        <h3 className="font-heading text-[2rem] leading-none font-semibold text-foreground">
          {experience.title}
        </h3>
        <p className="text-lg italic text-primary">
          {experience.organization}{" "}
          <span className="not-italic text-muted">| {experience.period}</span>
        </p>
      </motion.header>

      <motion.ul
        variants={staggerGroup(0.08, 0.05)}
        className="mt-5 space-y-3 text-base leading-8 text-muted"
      >
        {experience.bullets.map((bullet) => (
          <motion.li key={bullet} variants={listItem} className="flex gap-3">
            <motion.span
              aria-hidden="true"
              variants={listItem}
              className="mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{bullet}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  );
}
