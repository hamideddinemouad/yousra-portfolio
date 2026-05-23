import { Language } from "@/types/portfolio";
import { SectionHeading } from "./section-heading";

type LanguagesCardProps = {
  languages: Language[];
};

export function LanguagesCard({ languages }: LanguagesCardProps) {
  return (
    <section className="paper-card reveal-up delay-3 rounded-[1.75rem] p-6 sm:p-7">
      <div className="space-y-5">
        <SectionHeading title="Languages" />
        <div className="space-y-3">
          {languages.map((language) => (
            <div
              key={language.name}
              className="flex items-center justify-between rounded-2xl border border-[rgba(217,201,175,0.6)] bg-white/70 px-4 py-3"
            >
              <span className="font-heading text-2xl font-semibold text-foreground">
                {language.name}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {language.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
