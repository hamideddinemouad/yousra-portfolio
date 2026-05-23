import { SectionHeading } from "./section-heading";

type AchievementsListProps = {
  achievements: string[];
};

export function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <section className="paper-card reveal-up delay-2 rounded-[1.75rem] p-6 sm:p-7">
      <div className="space-y-5">
        <SectionHeading title="Achievements" />
        <ul className="space-y-3 text-base leading-7 text-muted">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
