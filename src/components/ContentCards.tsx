import { site } from "@/content/site";
import { Section } from "./Section";

export function ContentCards() {
  const { id, heading, lead, cards } = site.content;

  return (
    <Section id={id} heading={heading} lead={lead} tone="navy-deep">
      <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <li
            key={card.title}
            className="flex flex-col border-[3px] border-ink bg-grey p-6 text-ink shadow-card"
          >
            <h3 className="text-sm">{card.title}</h3>
            <p className="mt-4 grow">{card.body}</p>
            <p className="mt-6 text-sm font-semibold text-navy">{card.meta}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
