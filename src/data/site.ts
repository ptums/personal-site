// One source of truth for who Peter is and what he offers. Page metadata, JSON-LD,
// llms.txt and the pages themselves read from here so search engines and AI models
// see the same name, title and description everywhere.

export const SITE_URL = "https://tumulty.me";

// PRE-LAUNCH: false keeps the site out of search engines and away from AI crawlers.
// To launch, set this to true AND remove the "X-Robots-Tag" header block in vercel.json.
// (Drives the robots meta tag in Layout.astro and /robots.txt.) See docs/seo.md, "Launch".
export const ALLOW_INDEXING = true;

// Analytics feature flag (TWS-71). false = no PostHog code on any page.
// To launch: set PUBLIC_POSTHOG_KEY (and PUBLIC_POSTHOG_HOST for EU) in Vercel, then set this to true.
// Runs cookieless with no person profiles, to match /privacy. See docs/analytics.md.
export const ENABLE_POSTHOG = false;

export const BOOKING_URL = "https://cal.com/peter-tumulty-hnhdwj/30min";

// Split so the address never appears in page text; the script in Header.astro joins it.
// The full address is used in JSON-LD (see the note in seo docs).
export const EMAIL_USER = "peter";
export const EMAIL_DOMAIN = "tumulty.me";
export const EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}`;

export const PERSON = {
  name: "Peter Tumulty",
  alternateName: "Peter F. Tumulty",
  jobTitle: "Software Engineer & Technical Product Manager",
  tagline: "AI-Driven Technical Product Management & Engineering",
  description:
    "AI-driven technical product management and engineering for long-term contracts: technical roadmaps, strategy, lead engineering, automation, and cloud.",
  image: `${SITE_URL}/images/peter-2023.webp`,
  sameAs: [
    "https://github.com/ptums",
    "https://www.linkedin.com/in/petertumulty/",
  ],
};

// Link preview card (1200x630) for LinkedIn, Slack, iMessage and X
export const SOCIAL_IMAGE = {
  url: `${SITE_URL}/images/og-card.jpg`,
  width: 1200,
  height: 630,
  alt: "Peter Tumulty, AI-Driven Technical Product Management & Engineering, tumulty.me",
};

export const BUSINESS = {
  name: "Tumulty Web Services",
  legalName: "Tumulty Web Services LLC",
  logo: `${SITE_URL}/images/badge.svg`,
};

// In the order Peter lists them
export const SERVICES = [
  "Project planning",
  "Technical roadmaps",
  "Technical strategy",
  "Product solutions",
  "AI modernization and enablement",
  "Full-stack engineering",
  "Automation",
  "Cloud solutions",
  "Mentorship",
];

export const SERVICE_AREA_TEXT =
  "Remote, Northwest Arkansas, New Jersey (central, shore, northern, southern), Greater Philadelphia, and New York City";

// Structured form of the same areas for JSON-LD ("remote" is stated in the text above)
export const SERVICE_AREAS = [
  { "@type": "Place", name: "Northwest Arkansas" },
  { "@type": "State", name: "New Jersey" },
  { "@type": "Place", name: "Greater Philadelphia" },
  { "@type": "City", name: "New York City" },
];

// Text in [PETER: ...] is a placeholder; anything containing one is left out of
// structured data and llms.txt until it's filled in
export const isPlaceholder = (text: string) => text.includes("[PETER:");
