"use client";

import { useState } from "react";
import { AchievementsList } from "@/components/portfolio/achievements-list";
import { ContactRibbon } from "@/components/portfolio/contact-ribbon";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { FooterContact } from "@/components/portfolio/footer-contact";
import { Hero } from "@/components/portfolio/hero";
import { LanguagesCard } from "@/components/portfolio/languages-card";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { SectionNav } from "@/components/portfolio/section-nav";
import { SkillsList } from "@/components/portfolio/skills-list";
import { SummaryCard } from "@/components/portfolio/summary-card";
import { portfolioData } from "@/data/portfolio";

type AccordionSection =
  | "summary"
  | "teaching"
  | "skills"
  | "experience"
  | "achievements"
  | "education"
  | "languages";

export function PortfolioPageShell() {
  const [teachingExperience, additionalExperience] = portfolioData.experiences;
  const [activeSection, setActiveSection] = useState<AccordionSection | null>(
    null,
  );
  const sections = [
    { id: "summary", label: "Summary" },
    { id: "teaching", label: "Teaching" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "languages", label: "Languages" },
    { id: "contact", label: "Contact" },
  ];

  function toggleSection(section: AccordionSection) {
    setActiveSection((current) => (current === section ? null : section));
  }

  return (
    <main id="main-content" className="overflow-x-clip pb-28 lg:pb-48">
      <ScrollProgress />
      <SectionNav sections={sections} />
      <Hero profile={portfolioData.profile} contact={portfolioData.contact} />
      <ContactRibbon contact={portfolioData.contact} />
      <SummaryCard
        id="summary"
        summary={portfolioData.summary}
        isOpen={activeSection === "summary"}
        onToggle={() => toggleSection("summary")}
      />
      <ExperienceSection
        id="teaching"
        title={teachingExperience.title}
        experiences={teachingExperience.items}
        variant="timeline"
        isOpen={activeSection === "teaching"}
        onToggle={() => toggleSection("teaching")}
      />
      <EducationSection
        id="education"
        education={portfolioData.education}
        isOpen={activeSection === "education"}
        onToggle={() => toggleSection("education")}
      />
      <SkillsList
        id="skills"
        skills={portfolioData.skills}
        isOpen={activeSection === "skills"}
        onToggle={() => toggleSection("skills")}
      />
      <ExperienceSection
        id="experience"
        title={additionalExperience.title}
        experiences={additionalExperience.items}
        variant="spotlight"
        isOpen={activeSection === "experience"}
        onToggle={() => toggleSection("experience")}
      />
      <AchievementsList
        id="achievements"
        achievements={portfolioData.achievements}
        isOpen={activeSection === "achievements"}
        onToggle={() => toggleSection("achievements")}
      />
      <LanguagesCard
        id="languages"
        languages={portfolioData.languages}
        isOpen={activeSection === "languages"}
        onToggle={() => toggleSection("languages")}
      />
      <FooterContact
        id="contact"
        contact={portfolioData.contact}
        profile={portfolioData.profile}
        resumeHref={portfolioData.resumeHref}
      />
    </main>
  );
}
