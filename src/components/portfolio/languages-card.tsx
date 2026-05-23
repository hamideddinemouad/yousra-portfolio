"use client";

import { Language } from "@/types/portfolio";
import { motion } from "framer-motion";
import { fadeUp, listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type LanguagesCardProps = {
  languages: Language[];
};

export function LanguagesCard({ languages }: LanguagesCardProps) {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp(0.08, 24)}
      whileHover={{ y: -4 }}
      className="motion-card paper-card rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="space-y-5">
        <SectionHeading title="Languages" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerGroup(0.08, 0.07)}
          className="space-y-3"
        >
          {languages.map((language) => (
            <motion.div
              key={language.name}
              variants={listItem}
              whileHover={{ x: 3, backgroundColor: "rgba(255,255,255,0.92)" }}
              className="flex flex-col items-start gap-2 rounded-2xl border border-[rgba(217,201,175,0.6)] bg-white/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-heading text-2xl font-semibold text-foreground">
                {language.name}
              </span>
              <span className="w-full text-left text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-primary sm:w-auto sm:text-right sm:text-sm sm:tracking-[0.16em]">
                {language.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
