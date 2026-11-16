# Full Stack Gamer website

One-page marketing site for the Full Stack Gamer channel. Next.js (App Router) exported as static files: there is no server code.

## Run

Requires Node 22 or newer.

```bash
npm install
cp .env.example .env.local   # sets NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
```

## Build

```bash
npm run build                # writes the static site to out/
```

`NEXT_PUBLIC_SITE_URL` must be set for a production build. It is the public origin of the site (for example `https://www.example.com`) and feeds the canonical URL, share-card image URLs, `robots.txt` and `sitemap.xml`. The build fails if it is missing or malformed.

## Checks

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build && npm run test:e2e   # Playwright smoke test at 390px and 1440px, against out/
```

The first Playwright run on a machine needs `npx playwright install chromium`.

## Edit content

All copy, links and the stream schedule live in `src/content/site.ts`. Components only read from it.

To fill in the schedule, replace the `[DAY]` and `[TIME]` placeholders in `schedule.sessions`:

```ts
{ label: "SESSION 1", day: "TUESDAY", time: "8:00 PM" },
```

## Brand assets

Source images are in `public/`. After replacing `fsg-avatar.png` or `fsg-youtube-banner.png`, regenerate the favicon set and the share image:

```bash
npm run assets
```

This writes `src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png` and `public/og.png`. Commit the results.

## Deploy

The site deploys to Azure Static Web Apps by uploading the `out/` folder. The infrastructure and deploy workflow are not set up yet.

## Known workaround

`package.json` pins `typescript-eslint` to 8.72.2 through `overrides`. Version 8.73.0 was published without its `@typescript-eslint/types` dependency, which breaks `npm install`. Remove the override once a complete release is out.
