---
title: "Baseline: Unleashed Potential"
description: "Headless CMS migration baseline for a small business site: hosting cost, Lighthouse performance and security vulnerabilities before moving to Contentful."
---

# Baseline: Unleashed Potential Life Coaching (before migration)

Related: [Results: Unleashed Potential](/work/unleashed-potential/results) · [All projects](/#projects-heading)

Snapshot: commit `85ff22c` (2022-03-29, "removed caching for pages"). It is the last commit on Prismic before the Contentful migration began (`898cbc7`, 2022-06-10).
Live site at the time: https://www.unleashedpotentiallifecoaching.com/
Recorded: 2026-10-09

This page records how the old site worked and performed. A CMS (content management system) is the tool that stores the text and images of a site. The old site used a CMS called Prismic.

The Wayback Machine is a public web archive. Its earliest capture of the domain is 2021-12-28. So it has no record of anything older than this Next.js + Prismic version. This is the "old site" for the comparison in [MIGRATION-RESULTS.md](/work/unleashed-potential/results).

## Stack

| Layer     | Tech                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| Framework | Next.js 12 (`"next": "latest"` in package.json, so the version was not fixed)              |
| UI        | React 17, TypeScript 4.5.4, Tailwind 3, styled-components 5, Framer Motion 6               |
| CMS       | Prismic (`prismic-javascript`). The site asked its GraphQL API for content on every visit. |
| Email     | SendGrid through `/api/send-email`                                                         |
| Video     | YouTube Data API. The key is in `NEXT_PUBLIC_YT_API_KEY` and goes to the visitor's browser. |
| Hosting   | Vercel                                                                                     |

## Checks

| Check                                 | Result                                                                                                                                                                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Setup steps in the README             | None                                                                                                                                                                                                                                                                |
| Node version specified                | None (no `engines` field)                                                                                                                                                                                                                                           |
| Environment variables the code reads  | 7: `PRISMIC_REPOSITORY_NAME`, `PRISMIC_API_TOKEN`, `PRISMIC_REPOSITORY_LOCALE`, `SENDGRID_API_KEY`, `TO_EMAIL_ADDRESS`, `NEXT_PUBLIC_YT_API_KEY`, `NEXT_PUBLIC_CHANNEL_ID`. No document describes any of them.                                                       |
| Dependencies in package.json          | 13 runtime, 13 dev. 387 entries in yarn.lock                                                                                                                                                                                                                        |
| Source size                           | 67 files, 2,987 lines (pages, components, utils, contexts, hooks, layouts, types)                                                                                                                                                                                   |
| Routes                                | 10: `/`, `/our-story`, `/services`, `/coach/[slug]`, `/podcast`, `/reviews`, `/disclaimer`, `/sitemap.xml`, `/api/send-email`, `/404`                                                                                                                               |
| Rendering                             | 7 of 10 routes were server-rendered on every request (`getServerSideProps`). Only `/404` and `/disclaimer` were static.                                                                                                                                             |
| Production cache headers              | All 5 Wayback captures from 2022-05 to 2022-10 show `cache-control: private, no-cache, no-store, max-age=0, must-revalidate` and `x-vercel-cache: MISS`. So every visit ran the page function and made a Prismic request.                                           |
| `next build`                          | Passes on Node 22 with `NODE_OPTIONS=--openssl-legacy-provider` (webpack 4-era hashing). 7.7 s                                                                                                                                                                     |
| First Load JS (from the build output) | 86.9 kB shared. Home 149 kB, `/services` 149 kB, `/coach/[slug]` 149 kB, `/our-story` 144 kB, `/podcast` 121 kB, `/reviews` 121 kB                                                                                                                                  |
| Runs as committed today               | No. Every CMS-backed page returns 500. The code puts the GraphQL query in the URL without encoding (`?query=${query}`). Prismic now rejects that with 400. When that one request fails, the whole page fails.                                                       |
| `yarn audit` (today, runtime deps)    | 37 vulnerabilities (known security flaws) in 129 packages: 5 critical (`next` ×2, `@babel/traverse`, `loader-utils`, `minimist`), 12 high, 18 moderate, 2 low. All deps: 142 (8 critical)                                                                           |
| Tests                                 | None                                                                                                                                                                                                                                                                |

## Measured

I measured the old site as follows.

1. I built `85ff22c` in a scratch worktree (a temporary copy of the code).
2. I pointed it at the original Prismic repository. That repository is still public.
3. I applied two local-only patches in `utils/api.js`. The first patch URL-encodes the query. The second leaves out the `Authorization` header when no token is set.
4. I committed nothing.

The framework and main chunk hashes from this build match the 2022-05-18 Wayback capture of production. The `_app` chunk differs.

### Lighthouse (home page)

Lighthouse is a free tool that scores a web page. I used Lighthouse 12.8.2, mobile, simulated throttling (a slow phone and network are simulated), and headless Chrome in incognito. I ran 3 tests against `next start` on localhost. The numbers are medians (the middle result).

| Category       | Score |
| -------------- | ----- |
| Performance    | 73    |
| Accessibility  | 96    |
| Best Practices | 100   |
| SEO            | 100   |

| Metric                 | Value                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| FCP (First Contentful Paint: the time until the first text or image shows) | 2.8 s                                                                                                  |
| LCP (Largest Contentful Paint: the time until the biggest item on the page shows) | 4.8 s                                                                                              |
| Speed Index (how fast the page fills in) | 5.4 s                                                                                                             |
| TBT (Total Blocking Time: the time the page cannot respond to the visitor) | 0 ms                                                                                                   |
| CLS (Cumulative Layout Shift: how much the page jumps while it loads) | 0 (one run measured 0.118)                                                                                       |
| Total transfer         | 578 KiB, 28 requests                                                                                                                        |
| JavaScript transferred | 159 KiB                                                                                                                                     |
| LCP element            | Hero banner (CSS background). The Prismic image CDN (a network that serves files fast) sent it as a 301 KiB AVIF (`auto=compress,format`). AVIF is a small image format. |
| Root document          | 290–340 ms (the page waits for Prismic before it can respond)                                                                               |

### Server response time

I sent 20 requests to each page on `next start` on localhost. The table shows time to first byte (the time until the first data comes back). p90 is the time most requests beat. Only the slowest tenth took longer.

| Page                    | Median | p90    |
| ----------------------- | ------ | ------ |
| `/`                     | 92 ms  | 99 ms  |
| `/services`             | 89 ms  | 102 ms |
| `/reviews`              | 61 ms  | 76 ms  |
| `/podcast`              | 59 ms  | 63 ms  |
| `/coach/jessica-rebelo` | 58 ms  | 63 ms  |

This is a best case. The test used a warm local server and a fast connection to Prismic. Production on Vercel also had serverless cold starts (a slow first start of the server code). The cache headers above mean the CDN could not answer any request.

## Notes

- The Prismic content I measured is the repository's current master ref (last published 2022-10). It may differ slightly from what was live in March 2022.
- I also ran Lighthouse on the 2022-05-18 Wayback capture (`if_` mode, no toolbar). The 2022 capture was steady (11.8–12.2 s LCP). A 2026 capture of the current site ranged from 2.8 to 21.1 s across 3 runs. The result depended on how quickly the archive served the banner. Timings served through the archive measure the archive, so I do not use them.
- Evidence: `git show 85ff22c:package.json`, `curl -sI "https://web.archive.org/web/20220518224710id_/https://www.unleashedpotentiallifecoaching.com/"` (archived headers appear as `x-archive-orig-*`), and the build output and Lighthouse JSON from the scratch worktree (not committed).
