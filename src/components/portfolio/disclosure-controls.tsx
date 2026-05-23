"use client";

import { motion } from "framer-motion";

type DisclosureTone = "default" | "light";

type MobileDisclosureButtonProps = {
  isOpen: boolean;
  openLabel: string;
  closeLabel: string;
  tone?: DisclosureTone;
  onClick: () => void;
};

export function MobileDisclosureButton({
  isOpen,
  openLabel,
  closeLabel,
  tone = "default",
  onClick,
}: MobileDisclosureButtonProps) {
  const styles =
    tone === "light"
      ? "border-white/14 bg-white/8 text-[var(--bg)]"
      : "border-[rgba(199,161,91,0.5)] bg-white/76 text-primary";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`focus-ring inline-flex cursor-pointer items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] lg:hidden ${styles}`}
    >
      {isOpen ? closeLabel : openLabel}
      <Chevron isOpen={isOpen} />
    </button>
  );
}

export function DesktopDisclosureBadge({
  isOpen,
  tone = "default",
}: {
  isOpen: boolean;
  tone?: DisclosureTone;
}) {
  const styles =
    tone === "light"
      ? "border-white/14 bg-white/8 text-[var(--bg)]"
      : "border-[rgba(199,161,91,0.34)] bg-white/88 text-primary";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none hidden items-center gap-3 rounded-full border px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] lg:inline-flex ${styles}`}
    >
      Details
      <Chevron isOpen={isOpen} />
    </span>
  );
}

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 9 5.25 6 5.25-6" />
      </svg>
    </motion.span>
  );
}
