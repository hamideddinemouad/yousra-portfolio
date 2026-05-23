"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { fadeUp, gentleTap } from "./motion";
import { SectionHeading } from "./section-heading";

type DisclosureCardProps = {
  title: string;
  preview: string;
  meta?: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function DisclosureCard({
  title,
  preview,
  meta,
  children,
  defaultOpen = false,
}: DisclosureCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp(0.04, 24)}
      whileHover={{ y: -4 }}
      className="motion-card paper-card rounded-[1.75rem] p-6 sm:p-7"
    >
      <div className="space-y-5">
        <SectionHeading title={title} />

        <motion.button
          type="button"
          whileTap={gentleTap}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          className="focus-ring group flex w-full cursor-pointer items-start justify-between gap-4 rounded-[1.4rem] border border-[rgba(217,201,175,0.75)] bg-white/70 px-4 py-4 text-left hover:bg-white/85"
        >
          <div className="min-w-0 space-y-2">
            {meta ? (
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[0.72rem]">
                {meta}
              </p>
            ) : null}
            <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {preview}
            </p>
          </div>

          <Chevron isOpen={isOpen} />
        </motion.button>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-1">{children}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      className="mt-1 shrink-0 rounded-full border border-[rgba(199,161,91,0.5)] bg-white/80 p-2 text-primary"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m6.75 9 5.25 6 5.25-6"
        />
      </svg>
    </motion.span>
  );
}
