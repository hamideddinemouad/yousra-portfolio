"use client";

import { motion } from "framer-motion";
import { listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type SkillsListProps = {
  skills: string[];
};

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] border border-[rgba(217,201,175,0.72)] bg-[linear-gradient(180deg,#fffdfa,#f7f0e4)] p-6 shadow-[0_22px_55px_rgba(50,70,59,0.1)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.52fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-5">
            <SectionHeading title="Teaching Skills" />
            <p className="max-w-sm text-sm leading-7 text-muted sm:text-base">
              A modular skill set shaped around language building, confidence,
              structured practice, and responsive student support.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.08, 0.05)}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {skills.map((skill, index) => (
              <motion.article
                key={skill}
                variants={listItem}
                whileHover={{ y: -5, scale: 1.01 }}
                className="rounded-[1.5rem] border border-[rgba(217,201,175,0.72)] bg-white/82 p-4 shadow-[0_12px_28px_rgba(50,70,59,0.08)]"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                  Skill {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  {skill}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
