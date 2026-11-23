import { site } from "@/content/site";
import { Section } from "./Section";

export function Schedule() {
  const { id, heading, lead, sessions, sessionSuffix } = site.schedule;

  return (
    <Section id={id} index="02" heading={heading} lead={lead} tone="navy">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((session) => (
          <li
            key={session.label}
            className="hud-brackets border-[3px] border-mint bg-ink shadow-neon-mint [--hud:var(--color-neon)] [--hud-len:14px]"
          >
            <div className="flex items-center justify-between border-b-2 border-mint/40 px-6 py-3">
              <p className="font-hud text-base leading-normal tracking-[0.2em] text-mint glow-mint">
                {session.label}
              </p>
              <span
                aria-hidden="true"
                className="size-2.5 bg-neon shadow-[0_0_10px_#ff2e88] motion-safe:animate-pip"
              />
            </div>
            <div className="p-6">
              <h3 className="chroma text-xl text-white">{session.day}</h3>
              <p className="font-hud mt-3 text-lg tracking-wide">
                {session.time} {sessionSuffix}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
