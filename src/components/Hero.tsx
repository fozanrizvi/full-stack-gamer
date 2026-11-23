import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { container } from "./Section";

export function Hero() {
  const { hero, links } = site;

  return (
    <section
      aria-labelledby="hero-heading"
      className="scanlines relative overflow-hidden bg-navy py-22"
    >
      <div
        aria-hidden="true"
        data-testid="hero-grid"
        className="grid-floor pointer-events-none absolute bottom-0 -left-1/2 h-1/2 w-[200%] motion-safe:animate-grid"
      />
      <div
        aria-hidden="true"
        className="scan-sweep pointer-events-none absolute inset-x-0 -top-[15%] h-24 motion-safe:animate-sweep"
      />
      <div
        className={`${container} relative flex flex-col items-center gap-14 lg:flex-row lg:justify-between`}
      >
        <div className="w-full min-w-0 lg:flex-1">
          <p className="font-hud flex items-center gap-3 text-base leading-normal tracking-[0.2em] text-mint glow-mint">
            <span
              aria-hidden="true"
              className="size-2.5 bg-neon shadow-[0_0_10px_#ff2e88] motion-safe:animate-pip"
            />
            {hero.label}
          </p>
          <h1
            id="hero-heading"
            className="chroma mt-6 text-[clamp(1.25rem,6.6vw,2.25rem)] text-white xl:text-[2.75rem]"
          >
            <span className="block">{hero.headingLineOne}</span>
            <span className="block text-mint">
              {hero.headingLineTwo}
              <span
                aria-hidden="true"
                data-testid="hero-cursor"
                className="ml-[0.2em] inline-block h-[0.8em] w-[0.5em] bg-neon align-baseline shadow-[0_0_12px_#ff2e88] motion-safe:animate-blink"
              />
            </span>
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
        <div className="hud-brackets w-full max-w-[288px] p-6 sm:max-w-[408px] lg:shrink-0">
          <Image
            src="/fsg-logo.svg"
            alt={hero.logoAlt}
            width={360}
            height={413}
            priority
            className="h-auto w-full drop-shadow-[0_0_24px_rgb(18_196_142/0.45)] motion-safe:animate-float"
          />
        </div>
      </div>
    </section>
  );
}
