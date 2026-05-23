import { portfolioData } from "@/data/portfolio";

export const siteConfig = {
  name: "Yousra Hamideddine",
  title: "Yousra Hamideddine | English Teacher in Casablanca",
  shortTitle: "Yousra Hamideddine",
  description:
    "English teacher portfolio for Yousra Hamideddine, highlighting teaching experience, language instruction skills, academic background, and learner-centered support in Casablanca, Morocco.",
  siteName: "Yousra Hamideddine Portfolio",
  locale: "en_US",
  type: "website",
  keywords: [
    "Yousra Hamideddine",
    "English teacher Casablanca",
    "English tutor Morocco",
    "English teacher portfolio",
    "learner-centered English lessons",
    "grammar instruction",
    "speaking practice English",
    "English communication coaching",
    "English teacher Casablanca Morocco",
    "language instruction portfolio",
    "English graduate Hassan II University",
    "student support English",
    "online English teaching",
    "classroom English teacher",
    "beginner intermediate English learners",
  ],
  themeColor: "#3e5447",
  backgroundColor: "#f7f3ec",
  email: portfolioData.contact.email.value,
  phone: portfolioData.contact.phone.value,
  location: portfolioData.contact.location.value,
  resumePath: portfolioData.resumeHref,
} as const;

export function getBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    return new URL(
      configuredUrl.startsWith("http")
        ? configuredUrl
        : `https://${configuredUrl}`,
    );
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  return new URL("http://localhost:3000");
}

export function absoluteUrl(path = "/") {
  return new URL(path, getBaseUrl()).toString();
}
