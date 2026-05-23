"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SkillItem } from "@/types/portfolio";
import { useState } from "react";
import { MobileDisclosureButton } from "./disclosure-controls";
import { listItem } from "./motion";
import { SectionHeading } from "./section-heading";

type SkillsListProps = {
  id: string;
  skills: SkillItem[];
  isOpen: boolean;
  onToggle: () => void;
};

export function SkillsList({
  id,
  skills,
  isOpen,
  onToggle,
}: SkillsListProps) {
  const [visibleCount, setVisibleCount] = useState(2);
  const visibleSkills = skills.slice(0, visibleCount);
  const hasMoreSkills = visibleCount < skills.length;

  return (
    <section id={id} className="scroll-mt-28 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] border border-[rgba(217,201,175,0.72)] bg-[linear-gradient(180deg,#fffdfa,#f7f0e4)] p-6 shadow-[0_22px_55px_rgba(50,70,59,0.1)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.52fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-5">
            <SectionHeading title="Teaching Skills" />
            <p className="max-w-sm text-sm leading-7 text-muted sm:text-base">
              A modular skill set shaped around language building, confidence,
              structured practice, and responsive student support.
            </p>
            <MobileDisclosureButton
              isOpen={isOpen}
              openLabel="View skills"
              closeLabel="Hide skills"
              onClick={onToggle}
            />
          </div>

          <div className="hidden space-y-5 lg:block">
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              {visibleSkills.map((skill) => (
                <motion.article
                  key={skill.title}
                  variants={listItem}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="rounded-[1.5rem] border border-[rgba(217,201,175,0.72)] bg-white/82 p-4 shadow-[0_12px_28px_rgba(50,70,59,0.08)]"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {skill.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                    {skill.description}
                  </p>
                </motion.article>
              ))}
            </div>

            {hasMoreSkills ? (
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((count) => Math.min(count + 2, skills.length))
                }
                className="focus-ring inline-flex cursor-pointer items-center rounded-full border border-[rgba(199,161,91,0.5)] bg-white/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Show More
              </button>
            ) : null}
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key="skills-grid"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5 lg:hidden"
              >
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleSkills.map((skill) => (
                    <motion.article
                      key={skill.title}
                      variants={listItem}
                      initial="hidden"
                      animate="show"
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="rounded-[1.5rem] border border-[rgba(217,201,175,0.72)] bg-white/82 p-4 shadow-[0_12px_28px_rgba(50,70,59,0.08)]"
                    >
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                        {skill.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                        {skill.description}
                      </p>
                    </motion.article>
                  ))}
                </div>

                {hasMoreSkills ? (
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((count) =>
                        Math.min(count + 2, skills.length),
                      )
                    }
                    className="focus-ring inline-flex cursor-pointer items-center rounded-full border border-[rgba(199,161,91,0.5)] bg-white/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    Show More
                  </button>
                ) : null}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
