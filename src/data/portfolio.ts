import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Yousra Hamideddine",
    role: "English Teacher",
    intro:
      "Passionate English graduate with hands-on teaching experience, strong communication skills, and a learner-centered approach that helps students build confidence in speaking, comprehension, and real-world expression.",
    locationLabel: "Based in Casablanca, Morocco",
    portraitSrc: "/images/yousra-portrait.png",
    portraitAlt: "Portrait of Yousra Hamideddine",
    highlightAreas: [
      "Lesson planning",
      "Speaking practice",
      "Grammar support",
      "Student engagement",
    ],
  },
  contact: {
    phone: {
      label: "Phone",
      value: "+212 660302161",
      href: "tel:+212660302161",
    },
    email: {
      label: "Email",
      value: "hamideddine.yousra@gmail.com",
      href: "mailto:hamideddine.yousra@gmail.com",
    },
    location: {
      label: "Location",
      value: "Casablanca, Morocco",
    },
  },
  summary: [
    "Passionate English graduate with teaching experience and strong language skills.",
    "Skilled in lesson planning, grammar instruction, vocabulary development, pronunciation correction, speaking practice, classroom engagement, and student support.",
    "Experienced in helping learners improve English communication, comprehension, and confidence through structured, interactive lessons for individuals, groups, online classes, and classroom settings.",
  ],
  experiences: [
    {
      title: "Teaching Experience",
      items: [
        {
          title: "English Teacher",
          organization: "Shakespeare Academy",
          period: "2022 - 2023",
          bullets: [
            "Delivered English lessons to learners across diverse age groups, adapting methods to different learning styles, levels, and goals.",
            "Prepared customized learning plans for individual learners and group classes with a focus on grammar, vocabulary, pronunciation, speaking, and comprehension.",
            "Used interactive activities to strengthen engagement, communication skills, confidence, and English comprehension.",
            "Supported measurable student progress through regular practice, clear feedback, and learner-centered instruction.",
          ],
        },
        {
          title: "Volunteer - Special Needs Education",
          organization: "Inclusive Learning Support",
          period: "Community Experience",
          bullets: [
            "Supported inclusive learning activities with patience, adaptability, and clear communication to help learners understand instructions and participate effectively.",
          ],
        },
      ],
    },
    {
      title: "Additional Professional Experience",
      items: [
        {
          title: "Customer Service Representative - Canadian Market",
          organization: "Telus Digital",
          period: "2024 - Present",
          bullets: [
            "Delivered high-quality support to English-speaking Canadian clients, resolving inquiries with professional and effective communication.",
            "Managed high-volume client interactions while maintaining accuracy, attention to detail, and customer satisfaction.",
            "Adapted communication style to diverse client needs, improving clarity, trust, and problem resolution.",
          ],
        },
        {
          title: "Executive Support Specialist",
          organization: "SIST British Education",
          period: "2022",
          bullets: [
            "Prepared educational materials, documents, and communication for classes and school activities.",
            "Supported student inquiries related to instructions, schedules, and academic requirements.",
            "Collaborated with teachers and staff to support smooth academic operations and a positive learning experience.",
          ],
        },
      ],
    },
  ],
  skills: [
    "English teaching for beginner and intermediate learners",
    "Lesson planning, classroom activities, and student engagement",
    "Grammar instruction, vocabulary development, and reading comprehension",
    "Speaking practice, pronunciation correction, and communication skills",
    "One-to-one tutoring, small group instruction, and online teaching",
    "Student assessment, progress tracking, feedback, and learner support",
    "Patience, organization, adaptability, creativity, and clear communication",
  ],
  achievements: [
    "Graduated with honors",
    "University debate winner",
    "Volunteer experience in special needs education",
  ],
  education: [
    {
      degree: "Bachelor's Degree in English Studies",
      institution: "Hassan II University, Casablanca, Morocco",
      period: "2019 - 2023",
      details: [
        "Graduated with honors; studied English language, literature, communication, and academic writing.",
      ],
    },
    {
      degree: "High School Degree",
      institution: "Al Hekma National School, Saudi Arabia",
      period: "2017 - 2018",
      details: [
        "Ranked first in high school, demonstrating strong academic achievement, discipline, and commitment to learning.",
      ],
    },
  ],
  languages: [
    { name: "English", level: "Advanced" },
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Working proficiency" },
  ],
  resumeHref: "/documents/yousra-hamideddine-cv.png",
};
