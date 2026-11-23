import type { Metadata, Viewport } from "next";
import { Inter, Press_Start_2P, Share_Tech_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = getSiteUrl();
const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Full Stack Gamer: play the whole stack.",
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1F5C",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: siteUrl.href,
  logo: new URL("/fsg-logo.png", siteUrl).href,
  sameAs: [site.links.youtube, site.links.instagram],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pressStart.variable} ${shareTech.variable}`}
    >
      <body className="antialiased">
        {children}
        <div aria-hidden="true" className="crt-overlay" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
