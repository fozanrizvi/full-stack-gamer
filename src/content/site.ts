/**
 * All copy, links and schedule data for the site. Components read from here;
 * edit this file to change what the page says.
 */

export type ContentCard = {
  title: string;
  body: string;
  meta: string;
};

export type ScheduleSession = {
  label: string;
  /** Placeholder until the real day is known, e.g. "TUESDAY". */
  day: string;
  /** Placeholder until the real time is known, e.g. "8:00 PM". */
  time: string;
};

export type SiteContent = {
  name: string;
  handle: string;
  title: string;
  description: string;
  links: { youtube: string; instagram: string };
  nav: { label: string; href: string }[];
  header: { subscribe: string };
  hero: {
    label: string;
    headingLineOne: string;
    headingLineTwo: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    logoAlt: string;
  };
  content: { id: string; heading: string; lead: string; cards: ContentCard[] };
  schedule: {
    id: string;
    heading: string;
    lead: string;
    sessionSuffix: string;
    sessions: ScheduleSession[];
  };
  about: { id: string; heading: string; paragraphs: string[] };
  cta: { heading: string; primary: string; secondary: string };
  footer: { left: string; right: string };
};

export const site: SiteContent = {
  name: "Full Stack Gamer",
  handle: "@fullstackgamer1",
  title: "Full Stack Gamer: play the whole stack",
  description:
    "Calm GTA VI streams, highlights and how-it-works breakdowns from a full stack engineer who likes to see how every layer fits together.",
  links: {
    youtube: "https://www.youtube.com/@FullStackGamer1",
    instagram: "https://www.instagram.com/fullstackgamer1/",
  },
  nav: [
    { label: "Content", href: "#content" },
    { label: "Schedule", href: "#schedule" },
    { label: "About", href: "#about" },
  ],
  header: { subscribe: "Subscribe" },
  hero: {
    label: "LIVE 3 NIGHTS A WEEK",
    headingLineOne: "PLAY THE",
    headingLineTwo: "WHOLE STACK.",
    body: "Calm GTA VI streams, highlights and how-it-works breakdowns from a full stack engineer who likes to see how every layer fits together.",
    primaryCta: "Watch on YouTube",
    secondaryCta: "Follow on Instagram",
    logoAlt: "Full Stack Gamer logo: a grey game cartridge with a mint label",
  },
  content: {
    id: "content",
    heading: "WHAT YOU'LL FIND",
    lead: "Four things, each feeding the next: live streams make the clips, and the clips bring you back to the streams.",
    cards: [
      {
        title: "LIVE SESSIONS",
        body: "GTA VI with a relaxed chat. No yelling, just good company and good questions.",
        meta: "YouTube Live · 3 nights a week",
      },
      {
        title: "HIGHLIGHTS",
        body: "The best 15 to 60 seconds of each stream, cut so you can watch and share them fast.",
        meta: "Shorts · Reels · TikTok",
      },
      {
        title: "UNDER THE HOOD",
        body: "How a game's systems work, explained in plain words by someone who builds software.",
        meta: "YouTube · every 2 weeks",
      },
      {
        title: "SETUP AND TIPS",
        body: "Capture card, console and OBS settings that work, so your own stream looks clean.",
        meta: "YouTube · Reels · weekly",
      },
    ],
  },
  schedule: {
    id: "schedule",
    heading: "STREAM SCHEDULE",
    lead: "Three live sessions a week on YouTube. All times are Central Time.",
    sessionSuffix: "CT · GTA VI live",
    sessions: [
      { label: "SESSION 1", day: "[DAY]", time: "[TIME]" },
      { label: "SESSION 2", day: "[DAY]", time: "[TIME]" },
      { label: "SESSION 3", day: "[DAY]", time: "[TIME]" },
    ],
  },
  about: {
    id: "about",
    heading: "ABOUT THE CHANNEL",
    paragraphs: [
      "Full Stack Gamer is a gaming channel from a full stack engineer. The name is a joke that turned into a promise: I play across the whole stack, from story and mechanics to performance and community.",
      "The tone is calm and curious. You'll get honest takes, clear titles and a chat that feels friendly, starting with GTA VI at launch.",
    ],
  },
  cta: {
    heading: "READY TO PLAY?",
    primary: "YouTube",
    secondary: "Instagram",
  },
  footer: {
    left: "© 2026 Full Stack Gamer · @fullstackgamer1",
    right: "Not affiliated with Rockstar Games or Take-Two Interactive.",
  },
};
