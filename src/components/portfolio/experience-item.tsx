"use client";

import { Experience } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { gentleTap, listItem, staggerGroup } from "./motion";

type ExperienceItemProps = {
  experience: Experience;
  variant?: "timeline" | "spotlight";
};

export function ExperienceItem({
  experience,
  variant = "timeline",
}: ExperienceItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const preview = experience.bullets[0];
  const isSpotlight = variant === "spotlight";

  return (
    <motion.article
      variants={listItem}
      whileHover={{
        y: -6,
        boxShadow: isSpotlight
          ? "0 20px 44px rgba(26, 43, 35, 0.18)"
          : "0 18px 40px rgba(50, 70, 59, 0.14)",
      }}
      className={`motion-card tilt-sheen rounded-[1.5rem] border p-6 shadow-[0_10px_30px_rgba(50,70,59,0.08)] ${
        isSpotlight
          ? "border-white/10 bg-white/7"
          : "border-[rgba(217,201,175,0.7)] bg-white/75"
      }`}
    >
      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        whileTap={gentleTap}
        aria-expanded={isOpen}
        className="focus-ring flex w-full cursor-pointer items-start justify-between gap-4 text-left"
      >
        <motion.header variants={staggerGroup(0.03, 0.06)} className="min-w-0 space-y-3">
          <div className="space-y-2">
            <h3
              className={`font-heading text-[1.8rem] leading-none font-semibold sm:text-[2rem] ${
                isSpotlight ? "text-[var(--bg)]" : "text-foreground"
              }`}
            >
              {experience.title}
            </h3>
            <p
              className={`text-base italic sm:text-lg ${
                isSpotlight ? "text-accent" : "text-primary"
              }`}
            >
              {experience.organization}{" "}
              <span
                className={`not-italic ${
                  isSpotlight ? "text-white/62" : "text-muted"
                }`}
              >
                | {experience.period}
              </span>
            </p>
          </div>
          <p
            className={`max-w-3xl text-sm leading-6 sm:text-base sm:leading-7 ${
              isSpotlight ? "text-white/76" : "text-muted"
            }`}
          >
            {preview}
          </p>
        </motion.header>

        <Chevron isOpen={isOpen} />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.ul
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            variants={staggerGroup(0.08, 0.05)}
            className={`mt-5 space-y-3 overflow-hidden text-base leading-8 ${
              isSpotlight ? "text-white/78" : "text-muted"
            }`}
          >
            {experience.bullets.map((bullet, index) => (
              <motion.li
                key={`${experience.title}-${index}`}
                variants={listItem}
                className="flex gap-3"
              >
                <motion.span
                  aria-hidden="true"
                  variants={listItem}
                  className={`mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full ${
                    isSpotlight ? "bg-white/70" : "bg-accent"
                  }`}
                />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="shrink-0 rounded-full border border-[rgba(199,161,91,0.48)] bg-white/85 p-2 text-primary"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 9 5.25 6 5.25-6" />
      </svg>
    </motion.span>
  );
}
