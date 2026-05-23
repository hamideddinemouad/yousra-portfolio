"use client";

import { Contact, Profile } from "@/types/portfolio";
import { motion } from "framer-motion";
import { PortraitCard } from "./portrait-card";
import { fadeUp, listItem, staggerGroup } from "./motion";
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
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.08, 0.1)}
            className="space-y-8"
          >
            <motion.div className="space-y-5" variants={fadeUp(0, 18)}>
              <motion.p
                variants={fadeUp(0.02, 16)}
                className="text-sm font-semibold uppercase tracking-[0.35em] text-accent"
              >
                {profile.role}
              </motion.p>
              <motion.div className="space-y-4" variants={staggerGroup(0.04, 0.08)}>
                <motion.h1
                  variants={fadeUp(0.08, 24)}
                  className="font-heading max-w-3xl text-5xl leading-none font-semibold tracking-[0.05em] text-foreground sm:text-6xl lg:text-7xl"
                >
                  {profile.name}
                </motion.h1>
                <motion.p
                  variants={fadeUp(0.14, 20)}
                  className="max-w-2xl text-base leading-8 text-muted sm:text-lg"
                >
                  {profile.intro}
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerGroup(0.16, 0.06)}
              className="flex flex-wrap gap-3"
            >
              {profile.highlightAreas.map((area) => (
                <motion.span
                  key={area}
                  variants={listItem}
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.95)" }}
                  whileTap={{ scale: 0.985 }}
                  className="rounded-full border border-[rgba(199,161,91,0.45)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp(0.2, 18)}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <ResumeDownloadButton href="/documents/yousra-hamideddine-cv.png" />
              <motion.a
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.99 }}
                className="focus-ring inline-flex cursor-pointer items-center rounded-full border border-transparent px-2 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-primary-strong"
                href={contact.email.href}
              >
                <span className="sm:hidden">Send an email</span>
                <span className="hidden sm:inline">{contact.email.value}</span>
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp(0.26, 12)}
              className="border-t border-[rgba(199,161,91,0.6)] pt-5"
            >
              <motion.p
                variants={fadeUp(0.28, 8)}
                className="text-sm uppercase tracking-[0.24em] text-muted"
              >
                {profile.locationLabel}
              </motion.p>
            </motion.div>
          </motion.div>

          <PortraitCard src={profile.portraitSrc} alt={profile.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
