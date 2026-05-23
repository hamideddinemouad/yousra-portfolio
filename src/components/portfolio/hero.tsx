import { Contact, Profile } from "@/types/portfolio";
import { PortraitCard } from "./portrait-card";
import { ResumeDownloadButton } from "./resume-download-button";

type HeroProps = {
  profile: Profile;
  contact: Contact;
};

export function Hero({ profile, contact }: HeroProps) {
  return (
    <section className="editorial-shell mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
      <div className="paper-card overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,24rem)]">
          <div className="space-y-8">
            <div className="reveal-up space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">
                {profile.role}
              </p>
              <div className="space-y-4">
                <h1 className="font-heading max-w-3xl text-5xl leading-none font-semibold tracking-[0.05em] text-foreground sm:text-6xl lg:text-7xl">
                  {profile.name}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  {profile.intro}
                </p>
              </div>
            </div>

            <div className="reveal-up delay-1 flex flex-wrap gap-3">
              {profile.highlightAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[rgba(199,161,91,0.45)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="reveal-up delay-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ResumeDownloadButton href="/documents/yousra-hamideddine-cv.png" />
              <a
                className="focus-ring inline-flex cursor-pointer items-center rounded-full border border-transparent px-2 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-primary-strong"
                href={contact.email.href}
              >
                {contact.email.value}
              </a>
            </div>

            <div className="reveal-up delay-3 border-t border-[rgba(199,161,91,0.6)] pt-5">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">
                {profile.locationLabel}
              </p>
            </div>
          </div>

          <PortraitCard src={profile.portraitSrc} alt={profile.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
