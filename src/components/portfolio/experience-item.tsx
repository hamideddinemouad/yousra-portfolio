import { Experience } from "@/types/portfolio";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="rounded-[1.5rem] border border-[rgba(217,201,175,0.7)] bg-white/75 p-6 shadow-[0_10px_30px_rgba(50,70,59,0.08)]">
      <header className="space-y-2">
        <h3 className="font-heading text-[2rem] leading-none font-semibold text-foreground">
          {experience.title}
        </h3>
        <p className="text-lg italic text-primary">
          {experience.organization}{" "}
          <span className="not-italic text-muted">| {experience.period}</span>
        </p>
      </header>

      <ul className="mt-5 space-y-3 text-base leading-8 text-muted">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.95rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
