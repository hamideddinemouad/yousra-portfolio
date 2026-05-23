"use client";

import { Experience } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ExperienceItem } from "./experience-item";
import { staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type ExperienceSectionProps = {
  title: string;
  experiences: Experience[];
  variant?: "timeline" | "spotlight";
};

export function ExperienceSection({
  title,
  experiences,
  variant = "timeline",
}: ExperienceSectionProps) {
  const isSpotlight = variant === "spotlight";

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div
        className={`mx-auto overflow-hidden rounded-[2.4rem] border ${
          isSpotlight
            ? "max-w-7xl border-[rgba(62,84,71,0.22)] bg-primary-strong text-[var(--bg)] shadow-[0_26px_60px_rgba(26,43,35,0.18)]"
            : "max-w-6xl border-[rgba(217,201,175,0.72)] bg-[linear-gradient(180deg,#fffefc,#f6efe4)] shadow-[0_24px_55px_rgba(50,70,59,0.12)]"
        }`}
      >
        <div
          className={`grid gap-0 ${
            isSpotlight
              ? "lg:grid-cols-[minmax(18rem,0.55fr)_minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(18rem,0.5fr)_minmax(0,1fr)]"
          }`}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.06, 0.08)}
            className={`space-y-6 px-6 py-8 sm:px-8 lg:px-10 lg:py-10 ${
              isSpotlight
                ? "border-b border-white/10 lg:border-r lg:border-b-0"
                : "border-b border-[rgba(199,161,91,0.28)] lg:border-r lg:border-b-0"
            }`}
          >
            <SectionHeading
              title={title}
              tone={isSpotlight ? "light" : "default"}
            />
            <p
              className={`max-w-sm text-sm leading-7 sm:text-base ${
                isSpotlight ? "text-white/74" : "text-muted"
              }`}
            >
              {isSpotlight
                ? "Professional experience beyond the classroom, showing communication, support, and organizational range."
                : "A teaching chapter shaped by practical classroom work, inclusive support, and learner-centered lesson design."}
            </p>
            <div
              className={`rounded-[1.5rem] px-4 py-4 ${
                isSpotlight ? "bg-white/6" : "bg-white/75"
              }`}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent">
                Snapshot
              </p>
              <p
                className={`mt-2 text-sm leading-6 ${
                  isSpotlight ? "text-white/76" : "text-muted"
                }`}
              >
                {experiences.length} role{experiences.length > 1 ? "s" : ""},{" "}
                with focus on{" "}
                {experiences.map((experience) => experience.title).join(" and ")}.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.08, 0.1)}
            className={`px-6 py-8 sm:px-8 lg:px-10 lg:py-10 ${
              isSpotlight
                ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]"
                : ""
            }`}
          >
            <div
              className={`space-y-5 ${
                isSpotlight
                  ? "lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"
                  : "relative before:absolute before:left-[0.62rem] before:top-2 before:bottom-2 before:w-px before:bg-[rgba(199,161,91,0.35)]"
              }`}
            >
              {experiences.map((experience) => (
                <div
                  key={`${experience.title}-${experience.period}`}
                  className={isSpotlight ? "" : "relative pl-8"}
                >
                  {isSpotlight ? null : (
                    <span className="absolute left-0 top-7 h-5 w-5 rounded-full border border-[rgba(199,161,91,0.55)] bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.65)]" />
                  )}
                  <ExperienceItem experience={experience} variant={variant} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
