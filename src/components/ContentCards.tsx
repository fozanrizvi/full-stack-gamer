import { site } from "@/content/site";
import { Section } from "./Section";

export function ContentCards() {
  const { id, heading, lead, cards } = site.content;

  return (
    <Section id={id} index="01" heading={heading} lead={lead} tone="navy-deep">
      <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <li
            key={card.title}
            className="flex flex-col border-[3px] border-ink bg-grey p-3 text-ink shadow-card hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lift-mint motion-safe:transition-[translate,box-shadow] motion-safe:duration-150"
          >
            <div aria-hidden="true" className="cart-ridges mx-3 h-5" />
            <div className="mt-3 border-2 border-ink bg-navy px-4 py-3">
              <h3 className="text-sm text-mint glow-mint">{card.title}</h3>
            </div>
            <div className="flex grow flex-col px-3 pt-4 pb-2">
              <p className="grow">{card.body}</p>
              <p className="font-hud mt-6 text-base tracking-wide text-navy">
                {card.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
