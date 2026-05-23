"use client";

import { EducationItem } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { DisclosureCard } from "./disclosure-card";
import { gentleTap, listItem, staggerGroup } from "./motion";

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  const remaining = Math.max(education.length - 1, 0);
  const preview = remaining
    ? `${education[0]?.degree} and ${remaining} more academic milestone${remaining > 1 ? "s" : ""}.`
    : education[0]?.degree ?? "";

  return (
    <DisclosureCard
      title="Education"
      meta={`${education.length} milestones`}
      preview={preview}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerGroup(0.08, 0.08)}
        className="space-y-4"
      >
        {education.map((item) => (
          <EducationItemCard key={`${item.degree}-${item.period}`} item={item} />
        ))}
      </motion.div>
    </DisclosureCard>
  );
}

function EducationItemCard({ item }: { item: EducationItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      variants={listItem}
      className="rounded-[1.35rem] border border-[rgba(217,201,175,0.68)] bg-white/72 p-4 sm:p-5"
    >
      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        whileTap={gentleTap}
        aria-expanded={isOpen}
        className="focus-ring flex w-full cursor-pointer items-start justify-between gap-4 text-left"
      >
        <div className="min-w-0">
          <h3 className="font-heading text-xl leading-tight font-semibold text-foreground sm:text-2xl">
            {item.degree}
          </h3>
          <p className="mt-1 text-sm italic text-primary sm:text-base">
            {item.institution}{" "}
            <span className="not-italic text-muted">| {item.period}</span>
          </p>
        </div>
        <Chevron isOpen={isOpen} />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.ul
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 space-y-2 overflow-hidden text-base leading-7 text-muted"
          >
            {item.details.map((detail) => (
              <motion.li key={detail} variants={listItem} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.75rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{detail}</span>
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
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 9 5.25 6 5.25-6" />
      </svg>
    </motion.span>
  );
}
