import type { ReactNode } from "react";

type Variant = "mint" | "grey" | "ink";

const variants: Record<Variant, string> = {
  mint: "bg-mint text-ink hover:bg-white hover:shadow-[4px_4px_0_#0b0f1a,0_0_22px_rgb(18_196_142/0.6)]",
  grey: "bg-grey text-ink hover:bg-white hover:shadow-[4px_4px_0_#0b0f1a,0_0_22px_rgb(255_46_136/0.55)]",
  ink: "bg-ink text-white hover:bg-navy-deep hover:shadow-[4px_4px_0_#0b0f1a,0_0_22px_rgb(18_196_142/0.6)]",
};

type Props = {
  href: string;
  variant: Variant;
  size?: "md" | "sm";
  children: ReactNode;
};

/** A link styled as a button. Every button on the site leaves the site, so it opens a new tab. */
export function ButtonLink({ href, variant, size = "md", children }: Props) {
  const sizing =
    size === "sm"
      ? "px-4 py-3 text-[11px] shadow-[4px_4px_0_#0b0f1a]"
      : "px-5 py-4 text-xs shadow-hard";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-pixel inline-block border-[3px] border-ink text-center leading-normal hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none motion-safe:transition-[translate,box-shadow,background-color] motion-safe:duration-100 motion-safe:hover:animate-glitch ${sizing} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
