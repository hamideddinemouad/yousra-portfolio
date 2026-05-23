"use client";

import { motion } from "framer-motion";
import { listItem, staggerGroup } from "./motion";
import { SectionHeading } from "./section-heading";

type SummaryCardProps = {
  summary: string[];
};

export function SummaryCard({ summary }: SummaryCardProps) {
  const [lead, ...supporting] = summary;

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[rgba(217,201,175,0.72)] bg-primary-strong text-[var(--bg)] shadow-[0_28px_70px_rgba(50,70,59,0.16)]">
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
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.14, 0.08)}
            className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 sm:px-8 lg:border-t-0 lg:border-l lg:border-white/10 lg:px-10 lg:py-12"
          >
            <div className="space-y-5">
              <SectionHeading title="Approach" tone="light" />
              {supporting.map((paragraph) => (
                <motion.article
                  key={paragraph}
                  variants={listItem}
                  className="rounded-[1.5rem] border border-white/10 bg-white/7 px-5 py-5 text-sm leading-7 text-white/78 sm:text-base"
                >
                  {paragraph}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SummaryPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/12 bg-white/7 px-4 py-4">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-accent">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium tracking-[0.04em] text-white sm:text-base">
        {value}
      </p>
    </div>
  );
}
