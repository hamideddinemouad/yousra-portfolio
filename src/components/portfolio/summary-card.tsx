"use client";

import { motion } from "framer-motion";
import { fadeUp, listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type SummaryCardProps = {
  summary: string[];
};

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp(0, 24)}
      whileHover={{ y: -4 }}
      className="motion-card paper-card rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="space-y-5">
        <SectionHeading title="Professional Summary" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerGroup(0.1, 0.1)}
          className="space-y-4 text-base leading-8 text-muted"
        >
          {summary.map((paragraph) => (
            <motion.p key={paragraph} variants={listItem}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
