export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  intro: string;
  locationLabel: string;
  portraitSrc: string;
  portraitAlt: string;
  highlightAreas: string[];
};

export type Contact = {
  phone: ContactLink;
  email: ContactLink;
  location: {
    label: string;
    value: string;
  };
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  bullets: string[];
};

export type ExperienceGroup = {
  title: string;
  items: Experience[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string[];
};

export type Language = {
  name: string;
  level: string;
};

export type PortfolioData = {
  profile: Profile;
  contact: Contact;
  summary: string[];
  experiences: ExperienceGroup[];
  skills: string[];
  achievements: string[];
  education: EducationItem[];
  languages: Language[];
  resumeHref: string;
};
