import { Contact } from "@/types/portfolio";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";

type ContactRibbonProps = {
  contact: Contact;
};

export function ContactRibbon({ contact }: ContactRibbonProps) {
  const items = [
    {
      label: contact.phone.label,
      value: contact.phone.value,
      href: contact.phone.href,
      icon: <PhoneIcon />,
    },
    {
      label: contact.email.label,
      value: contact.email.value,
      href: contact.email.href,
      icon: <MailIcon />,
    },
    {
      label: contact.location.label,
      value: contact.location.value,
      href: undefined,
      icon: <PinIcon />,
    },
  ];

  return (
    <section className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="reveal-up delay-1 overflow-hidden rounded-[1.75rem] bg-primary text-[var(--bg)] shadow-[0_18px_45px_rgba(50,70,59,0.24)]">
        <div className="grid divide-y divide-white/12 sm:divide-y-0 lg:grid-cols-3 lg:divide-x">
          {items.map((item) => {
            const content = (
              <div className="group flex items-center gap-4 px-5 py-5 sm:px-6">
                <span className="rounded-full border border-white/16 bg-white/8 p-3 text-accent transition-transform duration-200 group-hover:-translate-y-0.5">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.72rem] uppercase tracking-[0.24em] text-white/65">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-medium tracking-[0.06em] text-white sm:text-base">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring cursor-pointer transition-colors hover:bg-white/6"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
