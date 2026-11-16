import type { ReactNode } from "react";

type Variant = "mint" | "grey" | "ink";

const variants: Record<Variant, string> = {
  mint: "bg-mint text-ink hover:bg-white",
  grey: "bg-grey text-ink hover:bg-white",
  ink: "bg-ink text-white hover:bg-navy-deep",
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
      className={`font-pixel inline-block border-[3px] border-ink text-center leading-normal ${sizing} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
