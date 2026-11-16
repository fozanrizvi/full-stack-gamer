import { expect, test, type Locator } from "@playwright/test";
import { site } from "../src/content/site";

async function expectExternal(link: Locator, href: string) {
  await expect(link).toHaveAttribute("href", href);
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", "noopener noreferrer");
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("shows the hero and every main section", async ({ page }) => {
  const h1 = page.getByRole("heading", { level: 1 });
  await expect(h1).toHaveCount(1);
  await expect(h1).toContainText(site.hero.headingLineOne);
  await expect(h1).toContainText(site.hero.headingLineTwo);
  await expect(page.getByAltText(site.hero.logoAlt)).toBeVisible();

  for (const heading of [
    site.content.heading,
    site.schedule.heading,
    site.about.heading,
    site.cta.heading,
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible();
  }

  await expect(page.locator(`#${site.content.id} li`)).toHaveCount(4);
  await expect(page.locator(`#${site.schedule.id} li`)).toHaveCount(3);
  await expect(page.getByRole("contentinfo")).toContainText(site.footer.left);
});

test("nav links point at sections that exist", async ({ page }) => {
  const nav = page.getByRole("navigation", { name: "Main" });

  for (const item of site.nav) {
    await expect(nav.getByRole("link", { name: item.label })).toHaveAttribute(
      "href",
      item.href,
    );
    await expect(page.locator(item.href)).toBeAttached();
  }

  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toHaveAttribute("href", "#main");
});

test("YouTube and Instagram links open the right pages in a new tab", async ({
  page,
}) => {
  const { youtube, instagram } = site.links;

  for (const name of [
    site.header.subscribe,
    site.hero.primaryCta,
    site.cta.primary,
  ]) {
    await expectExternal(
      page.getByRole("link", { name, exact: true }),
      youtube,
    );
  }
  for (const name of [site.hero.secondaryCta, site.cta.secondary]) {
    await expectExternal(
      page.getByRole("link", { name, exact: true }),
      instagram,
    );
  }
});

test("page does not scroll sideways", async ({ page }) => {
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(overflow).toBe(0);
});
