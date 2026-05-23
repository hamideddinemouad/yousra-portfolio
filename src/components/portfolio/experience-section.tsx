"use client";

import { Experience } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ExperienceItem } from "./experience-item";
import { fadeUp, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type ExperienceSectionProps = {
  title: string;
  experiences: Experience[];
};

export function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp(0.03, 28)}
      whileHover={{ y: -4 }}
      className="motion-card paper-card rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="space-y-6">
        <SectionHeading title={title} />
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
      </div>
    </motion.section>
  );
}
