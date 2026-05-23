import { SectionHeading } from "./section-heading";

type SummaryCardProps = {
  summary: string[];
};

export function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <section className="paper-card reveal-up rounded-[1.75rem] p-6 sm:p-7">
      <div className="space-y-5">
        <SectionHeading title="Professional Summary" />
        <div className="space-y-4 text-base leading-8 text-muted">
          {summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
