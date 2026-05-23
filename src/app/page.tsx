import { AchievementsList } from "@/components/portfolio/achievements-list";
import { ContactRibbon } from "@/components/portfolio/contact-ribbon";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { FooterContact } from "@/components/portfolio/footer-contact";
import { Hero } from "@/components/portfolio/hero";
import { LanguagesCard } from "@/components/portfolio/languages-card";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { SkillsList } from "@/components/portfolio/skills-list";
import { SummaryCard } from "@/components/portfolio/summary-card";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const [teachingExperience, additionalExperience] = portfolioData.experiences;

  return (
    <main className="overflow-x-clip pb-10">
      <ScrollProgress />
      <Hero profile={portfolioData.profile} contact={portfolioData.contact} />
      <ContactRibbon contact={portfolioData.contact} />

      <section
        aria-label="Portfolio details"
        className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(18rem,0.92fr)_minmax(0,1.28fr)] lg:px-8"
      >
        <div className="space-y-6">
          <SummaryCard summary={portfolioData.summary} />
          <SkillsList skills={portfolioData.skills} />
          <AchievementsList achievements={portfolioData.achievements} />
          <EducationSection education={portfolioData.education} />
          <LanguagesCard languages={portfolioData.languages} />
        </div>

        <div className="space-y-6">
          <ExperienceSection
            title={teachingExperience.title}
            experiences={teachingExperience.items}
          />
          <ExperienceSection
            title={additionalExperience.title}
            experiences={additionalExperience.items}
          />
        </div>
      </section>

      <FooterContact
        contact={portfolioData.contact}
        profile={portfolioData.profile}
        resumeHref={portfolioData.resumeHref}
      />
    </main>
  );
}
