import { site } from "@/content/site";
import { Section } from "./Section";

export function Schedule() {
  const { id, heading, lead, sessions, sessionSuffix } = site.schedule;

  return (
    <Section id={id} heading={heading} lead={lead} tone="navy">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <li
            key={session.label}
            className="border-[3px] border-mint bg-ink p-6 shadow-card"
          >
            <p className="font-pixel text-xs leading-normal text-mint">
              {session.label}
            </p>
            <h3 className="mt-4 text-xl text-white">{session.day}</h3>
            <p className="mt-3">
              {session.time} {sessionSuffix}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
