"use client";

import { motion } from "framer-motion";
import { DisclosureCard } from "./disclosure-card";
import { listItem, staggerGroup } from "./motion";

type SummaryCardProps = {
  summary: string[];
};

export function SummaryCard({ summary }: SummaryCardProps) {
  const preview = summary[0];

  return (
    <DisclosureCard
      title="Professional Summary"
      meta="Overview"
      preview={preview}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerGroup(0.06, 0.08)}
        className="space-y-4 text-base leading-8 text-muted"
      >
        {summary.map((paragraph) => (
          <motion.p key={paragraph} variants={listItem}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </DisclosureCard>
  );
}
