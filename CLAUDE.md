# Full Stack Gamer website

One-page static marketing site. Next.js 16 (App Router, `output: 'export'`), TypeScript strict, Tailwind CSS v4. No server code, no database, no analytics.

Next.js 16 differs from older versions. Read the relevant guide in `node_modules/next/dist/docs/` before using a Next API you have not used in this repo.

## Commands

- `npm run dev`: dev server
- `npm run build`: static export to `out/` (needs `NEXT_PUBLIC_SITE_URL`, see `.env.example`)
- `npm run lint` / `npm run typecheck` / `npm run format`
- `npm run test:e2e`: Playwright smoke test against `out/`; build first
- `npm run assets`: regenerate favicons and `public/og.png` from the images in `public/`

## Conventions

- All copy, links and schedule data live in `src/content/site.ts`. Components never hard-code copy. Copy is fixed by the owner: do not reword it. `[DAY]` and `[TIME]` stay placeholders until the owner supplies values.
- Design tokens are defined in `src/app/globals.css` (`@theme`). The default Tailwind palette is removed on purpose: use only `navy`, `navy-deep`, `ink`, `mint`, `grey`, `grey-shade`, `white`, `body-on-navy`, `neon`. `neon` (#ff2e88) is the one hot accent: decorative or large text only, on navy or ink, never body copy.
- Look: retro cartridge base with a cyberpunk HUD layer (neon glow, chroma headings, HUD brackets, CRT overlay, synthwave grid). Utilities for all of it live in `globals.css`.
- Style rules: no border-radius; 3px ink borders on cards and buttons; hard offset shadows always present, a blurred neon glow may only stack on top of one (`shadow-neon-mint`, `shadow-neon-pink`); 4px ink top border between sections.
- Motion: CSS only, no JS. Every animation and transition goes through `motion-safe:` so reduced motion is fully static (covered by the e2e test).
- Fonts: `font-pixel` for headings and buttons, `font-hud` (Share Tech Mono) for labels, nav, meta and readouts, `font-sans` for body.
- Decorative glyphs (`//`, index numbers, cursor) are `aria-hidden` spans, not copy.
- Colour pairs: mint text only on navy or ink; ink text on mint or grey; never mint on grey.
- Focus ring is global (3px mint, 2px offset). Inside the mint band it is ink (`.focus-ink`) so it stays visible.
- Every button is an external link and goes through `ButtonLink`, which sets `target="_blank"` and `rel="noopener noreferrer"`.
- One `h1` (the hero). Sections use `Section`, which renders the `h2`.
- Keep dependencies minimal. No blog, CMS, auth, analytics or cookie banner.
- Conventional commits; commit and push only when asked.
