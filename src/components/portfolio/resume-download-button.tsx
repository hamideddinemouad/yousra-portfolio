import { ArrowDownTrayIcon } from "@/components/portfolio/icons";

type ResumeDownloadButtonProps = {
  href: string;
  className?: string;
};

export function ResumeDownloadButton({
  href,
  className = "",
}: ResumeDownloadButtonProps) {
  return (
    <a
      className={`focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[rgba(199,161,91,0.85)] bg-[rgba(255,255,255,0.82)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_12px_30px_rgba(62,84,71,0.1)] hover:-translate-y-0.5 hover:bg-primary hover:text-[var(--bg)] ${className}`}
      href={href}
      download
    >
      <ArrowDownTrayIcon className="h-4 w-4" />
      Download CV
    </a>
  );
}
