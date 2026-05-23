"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type NavSection = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: NavSection[];
};

export function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getSections = () =>
      sections
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const sectionElements = getSections();

      if (!sectionElements.length) {
        return;
      }

      const marker = window.innerWidth >= 1024 ? 170 : 130;
      const scrollMarker = window.scrollY + marker;

      let currentId = sectionElements[0].id;

      for (let index = 0; index < sectionElements.length; index += 1) {
        const section = sectionElements[index];
        const nextSection = sectionElements[index + 1];
        const sectionTop = section.offsetTop;
        const nextTop = nextSection?.offsetTop ?? Number.POSITIVE_INFINITY;

        if (scrollMarker >= sectionTop && scrollMarker < nextTop) {
          currentId = section.id;
          break;
        }

        if (scrollMarker >= sectionTop) {
          currentId = section.id;
        }
      }

      setActiveId(currentId);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <div className="sticky top-3 z-40 mx-auto mb-4 w-full max-w-7xl px-4 sm:px-6 lg:mb-8 lg:px-8">
      <nav
        aria-label="Section navigation"
        className="rounded-[1.6rem] border border-[rgba(217,201,175,0.7)] bg-[rgba(255,252,247,0.82)] px-3 py-3 shadow-[0_18px_45px_rgba(50,70,59,0.1)] backdrop-blur-md"
      >
        <div className="flex items-center justify-between gap-3 lg:hidden">
          <p className="min-w-0 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {sections.find((section) => section.id === activeId)?.label ?? "Sections"}
          </p>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="focus-ring inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[rgba(199,161,91,0.45)] bg-white/90 text-primary"
          >
            <span aria-hidden="true" className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="mt-3 grid gap-2 border-t border-[rgba(217,201,175,0.7)] pt-3 lg:hidden">
            {sections.map((section) => (
              <NavLink
                key={section.id}
                section={section}
                isActive={section.id === activeId}
                onNavigate={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        ) : null}

        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          {sections.map((section) => (
            <NavLink key={section.id} section={section} isActive={section.id === activeId} />
          ))}
        </div>
      </nav>
    </div>
  );
}

function NavLink({
  section,
  isActive,
  onNavigate,
}: {
  section: NavSection;
  isActive: boolean;
  onNavigate?: () => void;
}) {
  return (
    <motion.a
      href={`#${section.id}`}
      onClick={onNavigate}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      className={`focus-ring inline-flex cursor-pointer items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.06em] ${
        isActive
          ? "border-[rgba(62,84,71,0.22)] bg-primary text-[var(--bg)]"
          : "border-transparent bg-transparent text-muted hover:border-[rgba(199,161,91,0.35)] hover:bg-white/72 hover:text-primary"
      }`}
    >
      {section.label}
    </motion.a>
  );
}
