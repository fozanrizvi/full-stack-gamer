import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { container } from "./Section";

export function Header() {
  return (
    <header className="border-b-4 border-ink bg-navy-deep">
      <div
        className={`${container} flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-4`}
      >
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/fsg-logo.svg"
            alt=""
            width={40}
            height={46}
            className="h-auto w-10"
          />
          <span className="font-pixel text-sm leading-normal text-white">
            FULL STACK GAMER
          </span>
        </a>
        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block py-2 font-medium text-white underline-offset-4 hover:text-mint hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <ButtonLink href={site.links.youtube} variant="mint" size="sm">
                {site.header.subscribe}
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
