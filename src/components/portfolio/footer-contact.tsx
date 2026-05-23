"use client";

import { Contact, Profile } from "@/types/portfolio";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
import { fadeUp, gentleHover, gentleTap, listItem, staggerGroup } from "./motion";
import { ResumeDownloadButton } from "./resume-download-button";

type FooterContactProps = {
  contact: Contact;
  profile: Profile;
  resumeHref: string;
};

export function FooterContact({
  contact,
  profile,
  resumeHref,
}: FooterContactProps) {
  return (
    <footer className="mx-auto mt-4 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp(0.08, 30)}
        className="overflow-hidden rounded-[2rem] bg-primary-strong px-6 py-8 text-[var(--bg)] shadow-[0_22px_55px_rgba(50,70,59,0.28)] sm:px-8 lg:px-10"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerGroup(0.1, 0.08)}
            className="max-w-2xl space-y-4"
          >
            <motion.p
              variants={fadeUp(0.12, 14)}
              className="text-sm font-semibold uppercase tracking-[0.32em] text-accent"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeUp(0.16, 18)}
              className="font-heading text-4xl leading-none font-semibold sm:text-5xl"
            >
              Ready to support learners with clarity, patience, and energy.
            </motion.h2>
            <motion.p
              variants={fadeUp(0.2, 18)}
              className="text-base leading-8 text-white/72"
            >
              {profile.name} is available for English teaching, tutoring, and
              learner support opportunities in Casablanca and beyond.
            </motion.p>
          </motion.div>

          <motion.div variants={fadeUp(0.22, 16)}>
            <ResumeDownloadButton
              href={resumeHref}
              className="bg-[var(--bg)] text-primary hover:bg-white"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerGroup(0.26, 0.08)}
          className="mt-8 grid gap-4 border-t border-white/12 pt-6 lg:grid-cols-3"
        >
          <FooterLink href={contact.phone.href} icon={<PhoneIcon />} label={contact.phone.label} value={contact.phone.value} />
          <FooterLink href={contact.email.href} icon={<MailIcon />} label={contact.email.label} value={contact.email.value} />
          <FooterStatic icon={<PinIcon />} label={contact.location.label} value={contact.location.value} />
        </motion.div>
      </motion.section>
    </footer>
  );
}

type FooterItemProps = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

function FooterLink({
  href,
  icon,
  label,
  value,
}: FooterItemProps & { href: string }) {
  return (
      <motion.a
      href={href}
      variants={listItem}
      whileHover={gentleHover}
      whileTap={gentleTap}
      className="focus-ring flex min-w-0 cursor-pointer items-start gap-3 overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 hover:bg-white/10 sm:gap-4"
    >
      <motion.span
        whileHover={{ scale: 1.05, y: -1 }}
        className="shrink-0 rounded-full border border-white/14 bg-white/8 p-2.5 text-accent sm:p-3"
      >
        {icon}
      </motion.span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-white/62 sm:text-[0.72rem] sm:tracking-[0.24em]">
          {label}
        </span>
        <span className="mt-1 block break-words text-xs leading-5 font-medium tracking-[0.03em] text-white sm:text-base sm:leading-6 sm:tracking-[0.06em]">
          {value}
        </span>
      </span>
    </motion.a>
  );
}

function FooterStatic({ icon, label, value }: FooterItemProps) {
  return (
    <motion.div
      variants={listItem}
      whileHover={gentleHover}
      className="flex min-w-0 items-start gap-3 overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 sm:gap-4"
    >
      <motion.span
        whileHover={{ scale: 1.05, y: -1 }}
        className="shrink-0 rounded-full border border-white/14 bg-white/8 p-2.5 text-accent sm:p-3"
      >
        {icon}
      </motion.span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-white/62 sm:text-[0.72rem] sm:tracking-[0.24em]">
          {label}
        </span>
        <span className="mt-1 block break-words text-xs leading-5 font-medium tracking-[0.03em] text-white sm:text-base sm:leading-6 sm:tracking-[0.06em]">
          {value}
        </span>
      </span>
    </motion.div>
  );
}
