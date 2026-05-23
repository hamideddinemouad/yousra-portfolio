"use client";

import { motion } from "framer-motion";
import { listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type AchievementsListProps = {
  achievements: string[];
};

export function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl rounded-[2.3rem] bg-[linear-gradient(135deg,rgba(199,161,91,0.22),rgba(255,255,255,0.78))] p-[1px] shadow-[0_22px_50px_rgba(199,161,91,0.16)]">
        <div className="rounded-[2.25rem] bg-[linear-gradient(180deg,#fffdf8,#faf5ea)] px-6 py-8 sm:px-8 lg:px-10">
          <div className="space-y-6">
            <SectionHeading title="Achievements" />
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerGroup(0.08, 0.08)}
              className="grid gap-4 md:grid-cols-3"
            >
              {achievements.map((achievement, index) => (
                <motion.article
                  key={achievement}
                  variants={listItem}
                  whileHover={{ y: -5 }}
                  className="rounded-[1.6rem] border border-[rgba(217,201,175,0.72)] bg-white/85 px-5 py-6"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                    Highlight {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-heading text-2xl leading-tight text-foreground">
                    {achievement}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
