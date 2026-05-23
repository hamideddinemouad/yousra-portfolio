"use client";

import { motion } from "framer-motion";
import { DisclosureCard } from "./disclosure-card";
import { listItem, staggerGroup } from "./motion";

type SkillsListProps = {
  skills: string[];
};

export function SkillsList({ skills }: SkillsListProps) {
  const preview = skills.slice(0, 4).join(", ") + ".";

  return (
    <DisclosureCard
      title="Teaching Skills"
      meta={`${skills.length} focus areas`}
      preview={preview}
    >
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
    </DisclosureCard>
  );
}
