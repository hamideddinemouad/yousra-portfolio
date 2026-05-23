"use client";

import { ArrowDownTrayIcon } from "@/components/portfolio/icons";
import { motion } from "framer-motion";
import { gentleHover, gentleTap } from "./motion";

type ResumeDownloadButtonProps = {
  href: string;
  className?: string;
};

export function ResumeDownloadButton({
  href,
  className = "",
}: ResumeDownloadButtonProps) {
  return (
    <motion.a
      whileHover={gentleHover}
      whileTap={gentleTap}
      className={`focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[rgba(199,161,91,0.85)] bg-[rgba(255,255,255,0.82)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(62,84,71,0.1)] hover:-translate-y-0.5 hover:bg-primary hover:text-[var(--bg)] ${className}`}
      href={href}
      download
    >
      <motion.span
        aria-hidden="true"
        transition={{ duration: 0.22 }}
        whileHover={{ y: 1.5 }}
        className="inline-flex"
      >
        <ArrowDownTrayIcon className="h-4 w-4" />
      </motion.span>
      Download CV
    </motion.a>
  );
}
