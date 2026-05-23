import { Experience } from "@/types/portfolio";
import { ExperienceItem } from "./experience-item";
import { SectionHeading } from "./section-heading";

type ExperienceSectionProps = {
  title: string;
  experiences: Experience[];
};

export function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="paper-card reveal-up delay-1 rounded-[1.75rem] p-6 sm:p-7">
      <div className="space-y-6">
        <SectionHeading title={title} />
        <div className="space-y-5">
          {experiences.map((experience) => (
            <ExperienceItem key={`${experience.title}-${experience.period}`} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
