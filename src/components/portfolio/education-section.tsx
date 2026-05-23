"use client";

import { EducationItem } from "@/types/portfolio";
import { motion } from "framer-motion";
import { fadeUp, listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp(0.06, 24)}
      whileHover={{ y: -4 }}
      className="motion-card paper-card rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="space-y-5">
        <SectionHeading title="Education" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerGroup(0.08, 0.08)}
          className="space-y-5"
        >
          {education.map((item) => (
            <motion.article
              key={`${item.degree}-${item.period}`}
              variants={listItem}
              className="border-b border-[rgba(199,161,91,0.28)] pb-5 last:border-b-0 last:pb-0"
            >
              <h3 className="font-heading text-2xl leading-tight font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-base italic text-primary">
                {item.institution}{" "}
                <span className="not-italic text-muted">| {item.period}</span>
              </p>
              <ul className="mt-3 space-y-2 text-base leading-7 text-muted">
                {item.details.map((detail) => (
                  <motion.li key={detail} variants={listItem} className="flex gap-3">
                    <motion.span
                      aria-hidden="true"
                      variants={listItem}
                      className="mt-[0.75rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
