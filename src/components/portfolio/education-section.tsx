import { EducationItem } from "@/types/portfolio";
import { SectionHeading } from "./section-heading";

type EducationSectionProps = {
  education: EducationItem[];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="paper-card reveal-up delay-2 rounded-[1.75rem] p-6 sm:p-7">
      <div className="space-y-5">
        <SectionHeading title="Education" />
        <div className="space-y-5">
          {education.map((item) => (
            <article
              key={`${item.degree}-${item.period}`}
              className="border-b border-[rgba(199,161,91,0.28)] pb-5 last:border-b-0 last:pb-0"
            >
              <h3 className="font-heading text-2xl leading-tight font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-base italic text-primary">
                {item.institution}{" "}
                <span className="not-italic text-muted">| {item.period}</span>
              </p>
              <ul className="mt-3 space-y-2 text-base leading-7 text-muted">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.75rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
