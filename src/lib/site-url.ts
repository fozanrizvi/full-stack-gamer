const DEV_FALLBACK = "http://localhost:3000";

/**
 * The public origin of the site, from NEXT_PUBLIC_SITE_URL. Used for the
 * canonical URL, share-card image URLs, robots.txt and sitemap.xml.
 *
 * A production build without a valid value fails here, because shipping
 * canonical URLs that point at localhost is worse than a failed build.
 */
export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;

  if (!raw) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL is not set. Set it to the site's public origin (for example https://www.example.com) in .env.local or the build environment.",
      );
    }
    return new URL(DEV_FALLBACK);
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch (cause) {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL is not a valid URL: "${raw}". Use a full origin such as https://www.example.com.`,
      { cause },
    );
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must start with http:// or https://, got "${raw}".`,
    );
  }

  return new URL(url.origin);
}
