import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { container } from "./Section";

export function Hero() {
  const { hero, links } = site;

  return (
    <section aria-labelledby="hero-heading" className="scanlines bg-navy py-22">
      <div
        className={`${container} flex flex-col items-center gap-14 lg:flex-row lg:justify-between`}
      >
        <div className="w-full min-w-0 lg:flex-1">
          <p className="font-pixel text-xs leading-normal text-mint">
            {hero.label}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-[clamp(1.25rem,6.6vw,2.25rem)] text-white xl:text-[2.75rem]"
          >
            <span className="block">{hero.headingLineOne}</span>
            <span className="block text-mint">{hero.headingLineTwo}</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[19px] leading-relaxed">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <ButtonLink href={links.youtube} variant="mint">
              {hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={links.instagram} variant="grey">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <Image
          src="/fsg-logo.svg"
          alt={hero.logoAlt}
          width={360}
          height={413}
          priority
          className="h-auto w-full max-w-[240px] sm:max-w-[360px] lg:shrink-0"
        />
      </div>
    </section>
  );
}
