import { Contact, Profile } from "@/types/portfolio";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";
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
      <section className="reveal-up delay-3 overflow-hidden rounded-[2rem] bg-primary-strong px-6 py-8 text-[var(--bg)] shadow-[0_22px_55px_rgba(50,70,59,0.28)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">
              Contact
            </p>
            <h2 className="font-heading text-4xl leading-none font-semibold sm:text-5xl">
              Ready to support learners with clarity, patience, and energy.
            </h2>
            <p className="text-base leading-8 text-white/72">
              {profile.name} is available for English teaching, tutoring, and
              learner support opportunities in Casablanca and beyond.
            </p>
          </div>

          <ResumeDownloadButton
            href={resumeHref}
            className="bg-[var(--bg)] text-primary hover:bg-white"
          />
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/12 pt-6 sm:grid-cols-3">
          <FooterLink href={contact.phone.href} icon={<PhoneIcon />} label={contact.phone.label} value={contact.phone.value} />
          <FooterLink href={contact.email.href} icon={<MailIcon />} label={contact.email.label} value={contact.email.value} />
          <FooterStatic icon={<PinIcon />} label={contact.location.label} value={contact.location.value} />
        </div>
      </section>
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
    <a
      href={href}
      className="focus-ring flex cursor-pointer items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 hover:bg-white/10"
    >
      <span className="rounded-full border border-white/14 bg-white/8 p-3 text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.72rem] uppercase tracking-[0.24em] text-white/62">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-medium tracking-[0.06em] text-white sm:text-base">
          {value}
        </span>
      </span>
    </a>
  );
}

function FooterStatic({ icon, label, value }: FooterItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4">
      <span className="rounded-full border border-white/14 bg-white/8 p-3 text-accent">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.72rem] uppercase tracking-[0.24em] text-white/62">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-medium tracking-[0.06em] text-white sm:text-base">
          {value}
        </span>
      </span>
    </div>
  );
}
