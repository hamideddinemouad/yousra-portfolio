"use client";

import { EducationItem } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { MobileDisclosureButton } from "./disclosure-controls";
import { listItem } from "./motion";
import { SectionHeading } from "./section-heading";

type EducationSectionProps = {
  id: string;
  education: EducationItem[];
  isOpen: boolean;
  onToggle: () => void;
};

export function EducationSection({
  id,
  education,
  isOpen,
  onToggle,
}: EducationSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-[rgba(217,201,175,0.7)] bg-white/82 px-6 py-8 shadow-[0_22px_55px_rgba(50,70,59,0.1)] sm:px-8 lg:px-10">
        <div className="space-y-8">
          <SectionHeading title="Education" />
          <div className="grid gap-8 lg:grid-cols-[minmax(14rem,0.35fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                Academic Milestones
              </p>
              <p className="max-w-xs text-sm leading-7 text-muted sm:text-base">
                A focused path in English studies supported by strong academic
                performance and consistent growth.
              </p>
              <MobileDisclosureButton
                isOpen={isOpen}
                openLabel="View education"
                closeLabel="Hide education"
                onClick={onToggle}
              />
            </div>

            <div className="relative hidden space-y-6 before:absolute before:left-[1rem] before:top-3 before:bottom-3 before:w-px before:bg-[rgba(199,161,91,0.3)] lg:block">
              {education.map((item) => (
                <EducationItemCard key={`${item.degree}-${item.period}`} item={item} />
              ))}
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="education-timeline"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="relative space-y-6 before:absolute before:left-[1rem] before:top-3 before:bottom-3 before:w-px before:bg-[rgba(199,161,91,0.3)] lg:hidden"
                >
                  {education.map((item) => (
                    <EducationItemCard key={`${item.degree}-${item.period}`} item={item} />
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationItemCard({ item }: { item: EducationItem }) {
  return (
    <motion.article
      variants={listItem}
      whileHover={{ y: -4 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-4 h-8 w-8 rounded-full border border-[rgba(199,161,91,0.5)] bg-[linear-gradient(180deg,#fffdfa,#f7efdf)] shadow-[0_0_0_6px_rgba(255,255,255,0.95)]" />
      <div className="rounded-[1.5rem] border border-[rgba(217,201,175,0.72)] bg-[linear-gradient(180deg,#fffefc,#f8f1e6)] px-5 py-5 shadow-[0_14px_36px_rgba(50,70,59,0.08)]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
          {item.period}
        </p>
        <h3 className="mt-3 font-heading text-2xl leading-tight font-semibold text-foreground">
          {item.degree}
        </h3>
        <p className="mt-1 text-base italic text-primary">{item.institution}</p>
        <ul className="mt-4 space-y-2 text-base leading-7 text-muted">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.75rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
