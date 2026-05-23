"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MobileDisclosureButton } from "./disclosure-controls";
import { listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type SummaryCardProps = {
  id: string;
  summary: string[];
  isOpen: boolean;
  onToggle: () => void;
};

export function SummaryCard({
  id,
  summary,
  isOpen,
  onToggle,
}: SummaryCardProps) {
  const [lead, ...supporting] = summary;

  return (
    <section id={id} className="scroll-mt-28 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[rgba(217,201,175,0.78)] bg-[linear-gradient(180deg,#fffdfa,#f0e4d1)] text-foreground shadow-[0_28px_70px_rgba(132,102,76,0.12)]">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.08, 0.09)}
            className="space-y-8 px-6 py-8 sm:px-8 lg:px-12 lg:py-12"
          >
            <div className="max-w-4xl space-y-5">
              <motion.p
                variants={listItem}
                className="text-sm font-semibold uppercase tracking-[0.34em] text-accent"
              >
                Professional Summary
              </motion.p>
              <motion.h2
                variants={listItem}
                className="font-heading max-w-4xl text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl"
              >
                {lead}
              </motion.h2>
            </div>

            <motion.div
              variants={listItem}
              className="grid gap-3 sm:grid-cols-3"
            >
              <SummaryPill label="Teaching" value="Interactive lessons" />
              <SummaryPill label="Language" value="Grammar to fluency" />
              <SummaryPill label="Support" value="Students and groups" />
            </motion.div>

            <motion.div variants={listItem}>
              <MobileDisclosureButton
                isOpen={isOpen}
                openLabel="Read approach"
                closeLabel="Hide approach"
                onClick={onToggle}
              />
            </motion.div>
          </motion.div>

          <div className="hidden border-l border-[rgba(199,161,91,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(249,241,228,0.92))] px-6 py-8 sm:px-8 lg:block lg:px-10 lg:py-12">
            <div className="space-y-5">
              <SectionHeading title="Approach" />
              {supporting.map((paragraph) => (
                <motion.article
                  key={paragraph}
                  variants={listItem}
                  initial="hidden"
                  animate="show"
                  className="rounded-[1.5rem] border border-[rgba(217,201,175,0.7)] bg-white/80 px-5 py-5 text-sm leading-7 text-muted sm:text-base"
                >
                  {paragraph}
                </motion.article>
              ))}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {isOpen ? (
              <motion.div
                key="approach"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 18 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-[rgba(199,161,91,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(249,241,228,0.92))] px-6 py-8 sm:px-8 lg:hidden"
              >
                <div className="space-y-5">
                  <SectionHeading title="Approach" />
                  {supporting.map((paragraph) => (
                    <motion.article
                      key={paragraph}
                      variants={listItem}
                      className="rounded-[1.5rem] border border-[rgba(217,201,175,0.7)] bg-white/80 px-5 py-5 text-sm leading-7 text-muted sm:text-base"
                    >
                      {paragraph}
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SummaryPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-[rgba(217,201,175,0.68)] bg-white/72 px-4 py-4">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-accent">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium tracking-[0.04em] text-primary sm:text-base">
        {value}
      </p>
    </div>
  );
}
