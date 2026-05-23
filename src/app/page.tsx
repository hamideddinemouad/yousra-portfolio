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
      <SummaryCard summary={portfolioData.summary} />
      <ExperienceSection
        title={teachingExperience.title}
        experiences={teachingExperience.items}
        variant="timeline"
      />
      <SkillsList skills={portfolioData.skills} />
      <ExperienceSection
        title={additionalExperience.title}
        experiences={additionalExperience.items}
        variant="spotlight"
      />
      <AchievementsList achievements={portfolioData.achievements} />
      <EducationSection education={portfolioData.education} />
      <LanguagesCard languages={portfolioData.languages} />

      <FooterContact
        contact={portfolioData.contact}
        profile={portfolioData.profile}
        resumeHref={portfolioData.resumeHref}
      />
    </main>
  );
}
