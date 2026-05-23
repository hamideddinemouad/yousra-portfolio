"use client";

import { motion } from "framer-motion";
import { DisclosureCard } from "./disclosure-card";
import { listItem, staggerGroup } from "./motion";

type AchievementsListProps = {
  achievements: string[];
};

export function AchievementsList({ achievements }: AchievementsListProps) {
  const preview = achievements.slice(0, 2).join(" and ") + ".";

  return (
    <DisclosureCard
      title="Achievements"
      meta={`${achievements.length} highlights`}
      preview={preview}
    >
      <motion.ul
        initial="hidden"
        animate="show"
        variants={staggerGroup(0.08, 0.06)}
        className="space-y-3 text-base leading-7 text-muted"
      >
        {achievements.map((achievement) => (
          <motion.li key={achievement} variants={listItem} className="flex gap-3">
            <motion.span
              aria-hidden="true"
              variants={listItem}
              className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{achievement}</span>
          </motion.li>
        ))}
      </motion.ul>
    </DisclosureCard>
  );
}
