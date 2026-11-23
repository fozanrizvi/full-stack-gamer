import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { container } from "./Section";

export function CtaBand() {
  const { cta, links } = site;

  return (
    <section
      aria-labelledby="cta-heading"
      className="focus-ink border-t-4 border-ink bg-mint pb-16 text-ink"
    >
      <div
        aria-hidden="true"
        className="hazard h-3 border-b-[3px] border-ink"
      />
      <div
        className={`${container} mt-16 flex flex-wrap items-center justify-between gap-8`}
      >
        <h2 id="cta-heading" className="text-[clamp(1.125rem,4.6vw,1.5rem)]">
          {cta.heading}
        </h2>
        <div className="flex flex-wrap gap-5">
          <ButtonLink href={links.youtube} variant="ink">
            {cta.primary}
          </ButtonLink>
          <ButtonLink href={links.instagram} variant="grey">
            {cta.secondary}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
