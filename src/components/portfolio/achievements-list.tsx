"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MobileDisclosureButton } from "./disclosure-controls";
import { listItem } from "./motion";
import { SectionHeading } from "./section-heading";

type AchievementsListProps = {
  id: string;
  achievements: string[];
  isOpen: boolean;
  onToggle: () => void;
};

export function AchievementsList({
  id,
  achievements,
  isOpen,
  onToggle,
}: AchievementsListProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl rounded-[2.3rem] bg-[linear-gradient(135deg,rgba(199,161,91,0.22),rgba(255,255,255,0.78))] p-[1px] shadow-[0_22px_50px_rgba(199,161,91,0.16)]">
        <div className="rounded-[2.25rem] bg-[linear-gradient(180deg,#fffdf8,#faf5ea)] px-6 py-8 sm:px-8 lg:px-10">
          <div className="space-y-6">
            <div className="space-y-5">
              <SectionHeading title="Achievements" />
              <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                A few standout markers across academics, debate, and volunteer
                work.
              </p>
            </div>
            <MobileDisclosureButton
              isOpen={isOpen}
              openLabel="Show highlights"
              closeLabel="Hide highlights"
              onClick={onToggle}
            />

            <div className="hidden gap-4 lg:grid lg:grid-cols-3">
              {achievements.map((achievement) => (
                <motion.article
                  key={achievement}
                  variants={listItem}
                  initial="hidden"
                  animate="show"
                  whileHover={{ y: -5 }}
                  className="rounded-[1.6rem] border border-[rgba(217,201,175,0.72)] bg-white/85 px-5 py-6"
                >
                  <p className="font-heading text-2xl leading-tight text-foreground">
                    {achievement}
                  </p>
                </motion.article>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="achievements-grid"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-4 md:grid-cols-3 lg:hidden"
                >
                  {achievements.map((achievement) => (
                    <motion.article
                      key={achievement}
                      variants={listItem}
                      initial="hidden"
                      animate="show"
                      whileHover={{ y: -5 }}
                      className="rounded-[1.6rem] border border-[rgba(217,201,175,0.72)] bg-white/85 px-5 py-6"
                    >
                      <p className="font-heading text-2xl leading-tight text-foreground">
                        {achievement}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
