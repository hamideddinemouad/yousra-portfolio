"use client";

import { Language } from "@/types/portfolio";
import { motion } from "framer-motion";
import { listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type LanguagesCardProps = {
  languages: Language[];
};

export function LanguagesCard({ languages }: LanguagesCardProps) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-[rgba(217,201,175,0.7)] bg-[linear-gradient(180deg,#fffefc,#f8f2e7)] px-6 py-8 shadow-[0_18px_44px_rgba(50,70,59,0.08)] sm:px-8">
        <div className="space-y-6">
          <SectionHeading title="Languages" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.08, 0.07)}
            className="grid gap-4 md:grid-cols-3"
          >
            {languages.map((language) => (
              <motion.article
                key={language.name}
                variants={listItem}
                whileHover={{ y: -5 }}
                className="rounded-[1.6rem] border border-[rgba(217,201,175,0.68)] bg-white/84 px-5 py-5 text-center shadow-[0_12px_28px_rgba(50,70,59,0.06)]"
              >
                <p className="font-heading text-3xl font-semibold text-foreground">
                  {language.name}
                </p>
                <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  {language.level}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
