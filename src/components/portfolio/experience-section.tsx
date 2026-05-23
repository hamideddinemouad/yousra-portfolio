"use client";

import { Experience } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { MobileDisclosureButton } from "./disclosure-controls";
import { ExperienceItem } from "./experience-item";
import { staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type ExperienceSectionProps = {
  id: string;
  title: string;
  experiences: Experience[];
  variant?: "timeline" | "spotlight";
  isOpen: boolean;
  onToggle: () => void;
};

export function ExperienceSection({
  id,
  title,
  experiences,
  variant = "timeline",
  isOpen,
  onToggle,
}: ExperienceSectionProps) {
  const isProfessional = variant === "spotlight";
  const isDarkSection = true;

  return (
    <section id={id} className="scroll-mt-28 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div
        className={`mx-auto overflow-hidden rounded-[2.4rem] border ${
          isProfessional
            ? "max-w-7xl border-[rgba(110,85,68,0.32)] bg-[linear-gradient(180deg,#7d6857,#5c483b)] text-[var(--bg)] shadow-[0_26px_60px_rgba(92,72,59,0.22)]"
            : "max-w-7xl border-[rgba(62,84,71,0.22)] bg-primary-strong text-[var(--bg)] shadow-[0_26px_60px_rgba(26,43,35,0.18)]"
        }`}
      >
        <div
          className={`grid gap-0 ${
            isProfessional
              ? "lg:grid-cols-[minmax(18rem,0.55fr)_minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(18rem,0.5fr)_minmax(0,1fr)]"
          }`}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.06, 0.08)}
            className={`relative space-y-6 px-6 py-8 sm:px-8 lg:px-10 lg:py-10 ${
              isDarkSection
                ? "border-b border-white/10 lg:border-r lg:border-b-0"
                : "border-b border-[rgba(199,161,91,0.28)] lg:border-r lg:border-b-0"
            }`}
          >
            <SectionHeading
              title={title}
              tone={isDarkSection ? "light" : "default"}
            />
            <div className="flex items-start justify-between gap-4">
              <p
                className={`max-w-sm text-sm leading-7 sm:text-base ${
                  isDarkSection ? "text-white/74" : "text-muted"
                }`}
              >
                {isProfessional
                  ? "Professional experience beyond the classroom, showing communication, support, and organizational range."
                  : "A teaching chapter shaped by practical classroom work, inclusive support, and learner-centered lesson design."}
              </p>
            </div>
            <div
              className={`rounded-[1.5rem] px-4 py-4 ${
                isDarkSection ? "bg-white/6" : "bg-white/75"
              }`}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Snapshot
              </p>
              <p
                className={`mt-2 text-sm leading-6 ${
                  isDarkSection ? "text-white/76" : "text-muted"
                }`}
              >
                {experiences.length} role{experiences.length > 1 ? "s" : ""},{" "}
                with focus on{" "}
                {experiences.map((experience) => experience.title).join(" and ")}.
              </p>
            </div>
            <MobileDisclosureButton
              isOpen={isOpen}
              openLabel="View roles"
              closeLabel="Hide roles"
              tone={isDarkSection ? "light" : "default"}
              onClick={onToggle}
            />
          </motion.div>

          <div className={`hidden px-6 py-8 sm:px-8 lg:block lg:px-10 lg:py-10 ${
            isProfessional
              ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
              : ""
          }`}>
            <div
              className={`space-y-5 ${
                isProfessional
                  ? "lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"
                  : "relative before:absolute before:left-[0.62rem] before:top-2 before:bottom-2 before:w-px before:bg-[rgba(199,161,91,0.35)]"
              }`}
            >
              {experiences.map((experience) => (
                <div
                  key={`${experience.title}-${experience.period}`}
                  className={isProfessional ? "" : "relative pl-8"}
                >
                  {isProfessional ? null : (
                    <span className="absolute left-0 top-7 h-5 w-5 rounded-full border border-[rgba(199,161,91,0.55)] bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.65)]" />
                  )}
                  <ExperienceItem experience={experience} variant={variant} />
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key="experience-list"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={`px-6 py-8 sm:px-8 lg:px-10 lg:py-10 ${
                  isProfessional
                    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
                    : ""
                } lg:hidden`}
              >
                <div
                  className={`space-y-5 ${
                    isProfessional
                      ? "lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"
                      : "relative before:absolute before:left-[0.62rem] before:top-2 before:bottom-2 before:w-px before:bg-[rgba(199,161,91,0.35)]"
                  }`}
                >
                  {experiences.map((experience) => (
                    <div
                      key={`${experience.title}-${experience.period}`}
                      className={isProfessional ? "" : "relative pl-8"}
                    >
                      {isProfessional ? null : (
                        <span className="absolute left-0 top-7 h-5 w-5 rounded-full border border-[rgba(199,161,91,0.55)] bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.65)]" />
                      )}
                      <ExperienceItem experience={experience} variant={variant} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
