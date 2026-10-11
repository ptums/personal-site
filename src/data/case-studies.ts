// Case studies for the proof points. The prose is Peter's own wording from the home
// page project cards, split into problem / what I did / outcome. Numbers are unchanged.
// [PETER: ...] marks details still to be filled in.

export type CaseStudy = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  // The one-line result also used on /work-with-me
  result: string;
  problem: string[];
  approach: string[];
  outcome: string[];
  // Scannable numbers for readers and AI models; each one appears in the prose above
  metrics: { label: string; value: string }[];
  stack: string[];
  links: { label: string; href: string }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "law-firm-headless-migration",
    title: "Law Firm Web Platform: Monolith to Headless",
    seoTitle: "Law Firm Monolith to Headless Case Study | Peter Tumulty",
    description:
      "Case study: a law firm WordPress site moved to a headless front end. GTmetrix grade D to A, 99% uptime, and about 90% lower hosting costs.",
    result:
      "A law firm's home page went from a D to an A on GTmetrix, uptime reached 99%, and hosting costs fell about 90%.",
    problem: [
      "A law firm's WordPress site was bloated, its home page graded D on GTmetrix, and it kept crashing due to hosting limits.",
    ],
    approach: [
      "[PETER: 1 to 2 sentences on your role, the timeline, and who you worked with.]",
      "I split the front end from the content server, put each on its own host, and set up monitoring and outage alerts on both. I also automated deploys and wrote a microservice for complex content delivery.",
      "With this new flexibility I was able to add email marketing and a CRM integration, which grew a new mailing list to 40+ subscribers in the first year.",
    ],
    outcome: [
      "The home page grade went from D to A, uptime reached 99%, and hosting costs fell about 90%, which funded the new marketing integrations.",
    ],
    metrics: [
      { label: "GTmetrix grade (home page)", value: "D to A" },
      { label: "Uptime", value: "99%" },
      { label: "Hosting costs", value: "About 90% lower" },
      { label: "New mailing list, first year", value: "40+ subscribers" },
    ],
    stack: [
      "Digital Ocean",
      "Next.js",
      "Node.js",
      "Vercel",
      "WordPress GraphQL",
      "MySQL",
      "GitHub Actions",
      "Mailchimp",
      "HubSpot",
    ],
    links: [{ label: "Live site", href: "https://scarincihollenbeck.com" }],
  },
  {
    slug: "hall-of-fame-rebuild",
    title: "Asbury Park High School Hall of Fame: Redesign & Migration",
    seoTitle: "Hall of Fame Site Rebuild Case Study | Peter Tumulty",
    description:
      "Case study: a high school Hall of Fame site rebuilt so adding an inductee takes 1 file instead of up to 107, with accessibility up from 53 to 96.",
    result:
      "A high school Hall of Fame site went from editing up to 107 files per new inductee to 1.",
    problem: [
      "A non-profit high school Hall of Fame site had to be hand-coded page by page: adding one inductee meant editing up to 107 files, because the navigation was copied into every page.",
      "It also ran on plain HTTP, had no mobile layout, and still showed a four-year-old announcement.",
    ],
    approach: [
      "[PETER: 1 to 2 sentences on your role, the timeline, and who you worked with.]",
      "I scoped it, planned three phases, and rebuilt it with a member directory filterable by year, ceremony photo galleries, event and donation pages, and contact and nomination forms.",
      "All content lives in one small data file that generates every page, so there is no database to host or maintain.",
    ],
    outcome: [
      "Adding an inductee now takes 1 file, accessibility rose from 53 to 96, SEO from 82 to 100, requires no hosting costs, and the site runs on HTTPS.",
    ],
    metrics: [
      { label: "Files to edit per new inductee", value: "Up to 107 to 1" },
      { label: "Accessibility score", value: "53 to 96" },
      { label: "SEO score", value: "82 to 100" },
      { label: "Hosting costs", value: "None" },
    ],
    stack: ["Next.js", "Cloudinary", "Vercel", "Accessibility", "SEO"],
    links: [
      {
        label: "Baseline report",
        href: "https://github.com/aphshf/aphshalloffame.com/blob/main/BASELINE.md",
      },
      {
        label: "Results report",
        href: "https://github.com/aphshf/aphshalloffame.com/blob/main/RESULTS.md",
      },
    ],
  },
];
