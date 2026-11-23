import type { ReactNode } from "react";

export const container = "mx-auto w-full max-w-[1200px] px-5 md:px-10 lg:px-16";

type Props = {
  id: string;
  /** Decorative HUD index shown before the heading, e.g. "01". */
  index: string;
  heading: string;
  lead?: string;
  tone: "navy" | "navy-deep";
  children: ReactNode;
};

/** A titled page section with the 4px ink divider on top. */
export function Section({ id, index, heading, lead, tone, children }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`neon-rule-t border-t-4 border-ink py-16 md:py-20 ${tone === "navy" ? "bg-navy" : "bg-navy-deep"}`}
    >
      <div className={container}>
        <p
          aria-hidden="true"
          className="font-hud text-sm tracking-[0.3em] text-neon glow-neon"
        >
          {index} {"//"}
        </p>
        <h2
          id={headingId}
          className="chroma mt-3 text-[clamp(1.125rem,4.6vw,1.5rem)] text-white"
        >
          {heading}
        </h2>
        {lead ? <p className="mt-4 max-w-[640px] text-lg">{lead}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
