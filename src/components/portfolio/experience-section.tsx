"use client";

import { Experience } from "@/types/portfolio";
import { motion } from "framer-motion";
import { DisclosureCard } from "./disclosure-card";
import { ExperienceItem } from "./experience-item";
import { staggerGroup } from "./motion";

type ExperienceSectionProps = {
  title: string;
  experiences: Experience[];
};

export function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionProps) {
  const preview = `${experiences.length} role${experiences.length > 1 ? "s" : ""} with focus on ${experiences
    .map((experience) => experience.title)
    .join(" and ")}.`;

  return (
    <DisclosureCard
      title={title}
      meta={`${experiences.length} positions`}
      preview={preview}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerGroup(0.08, 0.1)}
        className="space-y-5"
      >
        {experiences.map((experience) => (
          <ExperienceItem
            key={`${experience.title}-${experience.period}`}
            experience={experience}
          />
        ))}
      </motion.div>
    </DisclosureCard>
  );
}
