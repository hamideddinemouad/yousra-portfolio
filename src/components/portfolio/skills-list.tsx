"use client";

import { motion } from "framer-motion";
import { fadeUp, listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type SkillsListProps = {
  skills: string[];
};

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp(0.02, 24)}
      whileHover={{ y: -4 }}
      className="motion-card paper-card rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="space-y-5">
        <SectionHeading title="Teaching Skills" />
        <motion.ul
          initial="hidden"
          animate="show"
          variants={staggerGroup(0.08, 0.05)}
          className="space-y-3 text-base leading-7 text-muted"
        >
          {skills.map((skill) => (
            <motion.li key={skill} variants={listItem} className="flex gap-3">
              <motion.span
                aria-hidden="true"
                variants={listItem}
                className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <span>{skill}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
