type SectionHeadingProps = {
  title: string;
  align?: "left" | "right";
};

export function SectionHeading({
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex items-center gap-4 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      {align === "right" ? <Line /> : null}
      <h2 className="font-heading text-3xl font-semibold uppercase tracking-[0.16em] text-primary sm:text-[2rem]">
        {title}
      </h2>
      {align === "left" ? <Line /> : null}
    </div>
  );
}

function Line() {
  return (
    <span
      aria-hidden="true"
      className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(199,161,91,0),rgba(199,161,91,0.85),rgba(199,161,91,0))] sm:block"
    />
  );
}
