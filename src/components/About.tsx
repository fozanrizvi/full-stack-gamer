import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  const { id, heading, paragraphs } = site.about;

  return (
    <Section id={id} heading={heading} tone="navy-deep">
      <div className="max-w-[720px] space-y-5 text-lg leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
