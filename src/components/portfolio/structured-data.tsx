import { portfolioData } from "@/data/portfolio";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function StructuredData() {
  const [teachingExperience, additionalExperience] = portfolioData.experiences;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: siteConfig.siteName,
        description: siteConfig.description,
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: absoluteUrl("/"),
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        about: {
          "@id": absoluteUrl("/#person"),
        },
        primaryImageOfPage: {
          "@id": absoluteUrl("/#primaryimage"),
        },
      },
      {
        "@type": "ImageObject",
        "@id": absoluteUrl("/#primaryimage"),
        url: absoluteUrl("/opengraph-image"),
        caption: `${portfolioData.profile.name} portfolio preview`,
      },
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: portfolioData.profile.name,
        jobTitle: portfolioData.profile.role,
        description: siteConfig.description,
        image: absoluteUrl(portfolioData.profile.portraitSrc),
        url: absoluteUrl("/"),
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "Morocco",
        },
        alumniOf: portfolioData.education.map((item) => ({
          "@type": "CollegeOrUniversity",
          name: item.institution,
        })),
        knowsLanguage: portfolioData.languages.map((language) => ({
          "@type": "Language",
          name: language.name,
        })),
        knowsAbout: portfolioData.skills.map(
          (skill) => `${skill.title}: ${skill.description}`,
        ),
        hasOccupation: {
          "@type": "Occupation",
          name: "English Teacher",
          occupationLocation: {
            "@type": "City",
            name: "Casablanca",
          },
        },
        worksFor: [
          ...teachingExperience.items.map((item) => ({
            "@type": "Organization",
            name: item.organization,
          })),
          ...additionalExperience.items.map((item) => ({
            "@type": "Organization",
            name: item.organization,
          })),
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
