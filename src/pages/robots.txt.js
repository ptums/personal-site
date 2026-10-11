import { ALLOW_INDEXING, SITE_URL } from "../data/site";

// AI crawlers named explicitly. They're blocked before launch; afterwards they're welcome.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

// Before launch search engines are still allowed to crawl, because they have to read the
// noindex tag to keep pages out of results; a Disallow would hide it from them.
export function GET() {
  const lines = ALLOW_INDEXING
    ? [
        "# tumulty.me: everything is public. Search engines and AI assistants are welcome.",
        "",
        "User-agent: *",
        "Allow: /",
        "",
        "# AI crawlers and assistants, listed so the intent is explicit",
        ...AI_CRAWLERS.map((bot) => `User-agent: ${bot}`),
        "Allow: /",
        "",
        `Sitemap: ${SITE_URL}/sitemap.xml`,
      ]
    : [
        "# tumulty.me is not launched yet. Pages carry noindex; AI crawlers are asked to stay out.",
        "",
        "User-agent: *",
        "Allow: /",
        "",
        ...AI_CRAWLERS.map((bot) => `User-agent: ${bot}`),
        "Disallow: /",
      ];
  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
