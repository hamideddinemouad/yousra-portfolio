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
        className="mx-auto w-full max-w-5xl space-y-6 px-4 py-8 sm:px-6 lg:px-8"
      >
        <SummaryCard summary={portfolioData.summary} />
        <ExperienceSection
          title={teachingExperience.title}
          experiences={teachingExperience.items}
        />
        <SkillsList skills={portfolioData.skills} />
        <ExperienceSection
          title={additionalExperience.title}
          experiences={additionalExperience.items}
        />
        <AchievementsList achievements={portfolioData.achievements} />
        <EducationSection education={portfolioData.education} />
        <LanguagesCard languages={portfolioData.languages} />
      </section>

      <FooterContact
        contact={portfolioData.contact}
        profile={portfolioData.profile}
        resumeHref={portfolioData.resumeHref}
      />
    </main>
  );
}
