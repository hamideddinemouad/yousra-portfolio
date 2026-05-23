"use client";

import { Language } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { MobileDisclosureButton } from "./disclosure-controls";
import { listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type LanguagesCardProps = {
  id: string;
  languages: Language[];
  isOpen: boolean;
  onToggle: () => void;
};

export function LanguagesCard({
  id,
  languages,
  isOpen,
  onToggle,
}: LanguagesCardProps) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-[rgba(217,201,175,0.7)] bg-[linear-gradient(180deg,#fffefc,#f8f2e7)] px-6 py-8 shadow-[0_18px_44px_rgba(50,70,59,0.08)] sm:px-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <SectionHeading title="Languages" />
              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
                A compact view of communication fluency across Arabic, French,
                and English.
              </p>
            </div>

            <MobileDisclosureButton
              isOpen={isOpen}
              openLabel="View languages"
              closeLabel="Hide languages"
              onClick={onToggle}
            />
          </div>

          <div className="hidden gap-4 lg:grid lg:grid-cols-3">
            {languages.map((language) => (
              <motion.article
                key={language.name}
                variants={listItem}
                initial="hidden"
                animate="show"
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
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key="languages-grid"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 12 }}
                variants={staggerGroup(0.08, 0.07)}
                className="grid gap-4 md:grid-cols-3 lg:hidden"
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
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
