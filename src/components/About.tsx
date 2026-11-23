import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  const { id, heading, paragraphs } = site.about;

  return (
    <Section id={id} index="03" heading={heading} tone="navy-deep">
      <div className="max-w-[760px] border-[3px] border-ink bg-navy shadow-neon-pink">
        <div
          aria-hidden="true"
          className="flex items-center gap-2 border-b-[3px] border-ink bg-ink px-4 py-3"
        >
          <span className="size-3 bg-mint" />
          <span className="size-3 bg-neon" />
          <span className="size-3 bg-grey" />
          <span className="cart-ridges ml-3 h-3 grow opacity-40" />
        </div>
        <div className="scanlines space-y-5 p-6 text-lg leading-relaxed md:p-8">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
