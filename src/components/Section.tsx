import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-[1200px] px-5 md:px-10 lg:px-16";

type Props = {
  id: string;
  heading: string;
  lead?: string;
  tone: "navy" | "navy-deep";
  children: ReactNode;
};

/** A titled page section with the 4px ink divider on top. */
export function Section({ id, heading, lead, tone, children }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t-4 border-ink py-16 md:py-20 ${tone === "navy" ? "bg-navy" : "bg-navy-deep"}`}
    >
      <div className={container}>
        <h2
          id={headingId}
          className="text-[clamp(1.125rem,4.6vw,1.5rem)] text-white"
        >
          {heading}
        </h2>
        {lead ? <p className="mt-4 max-w-[640px] text-lg">{lead}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
