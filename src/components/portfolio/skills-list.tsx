import { SectionHeading } from "./section-heading";

type SkillsListProps = {
  skills: string[];
};

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <section className="paper-card reveal-up delay-1 rounded-[1.75rem] p-6 sm:p-7">
      <div className="space-y-5">
        <SectionHeading title="Teaching Skills" />
        <ul className="space-y-3 text-base leading-7 text-muted">
          {skills.map((skill) => (
            <li key={skill} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
