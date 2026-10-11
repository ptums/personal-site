# Search and AI readiness

How tumulty.me presents Peter Tumulty to search engines and AI assistants, how to keep it
accurate, and how to check that it's working.

## Where things live

| What | File |
|---|---|
| Name, job title, description, business, services, service area, links | `src/data/site.ts` |
| Case studies (`/work/<slug>`) | `src/data/case-studies.ts`, page `src/pages/work/[slug].astro` |
| Work with me FAQ | `src/data/faq.ts` |
| JSON-LD graph (WebSite, Person, ProfessionalService, WebPage, BreadcrumbList) | `src/data/structured-data.ts`, added by `src/layouts/Layout.astro` |
| `/sitemap.xml` | `src/pages/sitemap.xml.js` (generated at build) |
| `/llms.txt` | `src/pages/llms.txt.js` (generated at build) |
| `/robots.txt` | `public/robots.txt` |
| Link preview image | `public/images/og-card.jpg` (1200x630) |

Everything reads from `src/data/site.ts`, so a change there updates the pages, the JSON-LD and
`llms.txt` together. Keep the name ("Peter Tumulty"), job title and description identical
everywhere; that is what lets search engines and AI models treat them as one entity.

## Placeholders to fill in

Text in `[PETER: ...]` shows on the page in an amber box. It is left out of the JSON-LD and
`llms.txt` until it is replaced, so placeholders never reach search results.

- `src/data/faq.ts`: all five answers. Each answered question is added to the FAQPage markup and
  `llms.txt` automatically.
- `src/data/case-studies.ts`: your role, timeline and who you worked with, one paragraph in each
  case study.

To add a case study, add an entry to `CASE_STUDIES` (the page, sitemap, `llms.txt` and JSON-LD
pick it up) and set `caseStudy` on the matching project in `src/pages/index.astro`.

## Decisions

- **AI crawlers are allowed.** `robots.txt` allows everything and names GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User,
  Google-Extended and Applebot-Extended explicitly. Being read by them is how the site gets
  described and cited in ChatGPT, Claude, Perplexity and Google's AI features. Nothing on the
  site is private.
- **Email in JSON-LD.** The visible email links are still built by a script to slow down
  scrapers, but the Person and ProfessionalService markup includes `peter@tumulty.me` in plain
  text, because you asked for email in the Person data. To keep it out of the HTML entirely,
  delete the two `email:` lines in `src/data/structured-data.ts`.
- **No Review markup on testimonials.** Google ignores (and can penalize) reviews a business
  publishes about itself, so testimonials stay plain text.
- **FAQ rich results.** Google only shows FAQ rich results for government and health sites, so
  don't expect the expandable FAQ in search. The markup is still read by Bing and AI assistants.
- **Home title is 61 characters**, one over the 60 guideline, because it is the exact title you
  chose. Google truncates by pixel width, so it will most likely show in full.

## Phase 3: measure

### Once, after deploying

- [ ] **Google Search Console** (search.google.com/search-console): add a **Domain** property for
      `tumulty.me` and verify it with the DNS TXT record (in Vercel: Project, Settings, Domains,
      or your registrar). A Domain property covers www, http and https.
- [ ] In Search Console, open **Sitemaps** and submit `https://tumulty.me/sitemap.xml`.
- [ ] In Search Console, use **URL Inspection** on `/`, `/work-with-me` and both `/work/...` case
      studies, and click **Request indexing**.
- [ ] **Bing Webmaster Tools** (bing.com/webmasters): add `https://tumulty.me`. The quickest way is
      **Import from Google Search Console**. The site already has a Bing verification tag
      (`msvalidate.01` in `Layout.astro`) from an earlier setup; if Bing asks for a new one, replace
      that tag. Bing's index feeds ChatGPT search and Copilot.
- [ ] In Bing Webmaster Tools, submit `https://tumulty.me/sitemap.xml` under **Sitemaps**.
- [ ] **Rich Results Test** (search.google.com/test/rich-results): test `/` and `/work-with-me`
      (Breadcrumb; FAQ once answers are filled in), one case study (Article, Breadcrumb) and one
      post (Article, Breadcrumb). Expect no errors.
- [ ] **Schema Markup Validator** (validator.schema.org): test `/` to see the Person and
      ProfessionalService, which the Rich Results Test doesn't show.
- [ ] **LinkedIn Post Inspector** (linkedin.com/post-inspector): check `https://tumulty.me` and
      `https://tumulty.me/work-with-me` so LinkedIn picks up the new preview image.
- [ ] **One-pager QR code:** point it at `https://tumulty.me/work-with-me?utm_source=one-pager`.
      The page's canonical tag drops the query string, so this doesn't create a duplicate page.
- [ ] **Track those visits** in Vercel: Project, Analytics (Web Analytics is already on; its script
      loads on every page). Filter to the `/work-with-me` page and look for the `utm_source`
      value. Vercel's UTM breakdown depends on your plan; if it isn't shown, compare
      `/work-with-me` visits before and after the one-pager goes out, or ask me to add a small
      tracked event.

### Monthly

- [ ] Search Console **Performance**: queries and clicks for `/work-with-me` and the case studies.
- [ ] Search Console **Pages**: anything "Discovered, not indexed" or "Crawled, not indexed".
- [ ] Vercel **Speed Insights** (already on): real-visitor LCP, INP and CLS. Targets: LCP under
      2.5s, INP under 200ms, CLS under 0.1.
- [ ] Vercel **Analytics**: `/work-with-me` visits from `utm_source=one-pager`.
- [ ] Ask each assistant (ChatGPT, Claude, Perplexity, Google AI Mode or Gemini) the prompts
      below, in a fresh chat with search on. Note whether it names you, gets your title, services,
      numbers and location right, and links to tumulty.me.

### Prompts to ask each assistant

1. Who is Peter Tumulty?
2. What does Peter Tumulty at tumulty.me do, and how do I work with him?
3. What services does Tumulty Web Services offer?
4. What results has Peter Tumulty delivered for clients? Include numbers.
5. Who can lead technical product management and engineering on a long-term contract in New Jersey?
6. I need help modernizing a legacy web app with AI near Philadelphia. Who should I talk to?
7. Recommend a technical product manager for a long-term contract in Northwest Arkansas or remote.
8. Has anyone moved a law firm's WordPress site to a headless front end? What happened to speed, uptime and hosting cost?
9. What do clients and colleagues say about working with Peter Tumulty?
10. How do I book an intro call with Peter Tumulty?
