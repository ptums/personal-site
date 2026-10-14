---
title: "Results: Unleashed Potential"
description: "Headless CMS migration results: Lighthouse performance 73 to 88, home page weight cut 85% and known vulnerabilities 150 to 0 after a Next.js upgrade."
---

# Migration results: Prismic + server rendering → Contentful + static generation

Related: [Baseline: Unleashed Potential](/work/unleashed-potential/baseline) · [All projects](/#projects-heading)

Before: commit `85ff22c` (2022-03-29), documented in [BASELINE.md](/work/unleashed-potential/baseline)
After: commit `4dbc2a0` (2025-07-01). This commit is live in production (its `_app` chunk hash matches the live site).
After fixes: `822fbb7` (hero image through `next/image`, AVIF enabled, email check fixed)
After audit: unused dependencies removed, Next.js 14.2 → 15.5.27, patched transitive versions. All measured 2026-10-09
Recorded: 2026-10-09

## Summary

A CMS (content management system) is the tool that stores the text and images of a site. The migration moved the site from one CMS (Prismic) to another (Contentful). It also changed how pages are made.

The migration ran from June 2022 to October 2023. It moved the CMS from Prismic to Contentful (PR #3). In October 2023, every content page changed from rendering on each request to rendering once at build time (PR #17). These changes did what they were meant to do.

- The server answers 30–45× faster.
- Text appears about twice as fast.
- The site no longer needs the CMS to be up when a visitor arrives.

During the migration, the home page hero became a raw 3.6 MB phone photo. The photo hid these gains in the Lighthouse headline score. Lighthouse is a free tool that scores a web page. The follow-up fix serves the photo through `next/image` as a resized AVIF (3,622 KiB → 162 KiB). AVIF is a small image format.

Then I cleaned up the dependencies and upgraded to Next 15. The results are:

- The home page weighs 654 KiB (down from 4,322).
- LCP (Largest Contentful Paint: the time until the biggest item on the page shows) is 3.9 s. It was 23.2 s live. It is now faster than the old site's 4.8 s.
- Lighthouse Performance is 88 (75 live, 73 before).
- Known vulnerabilities (security flaws) in runtime dependencies went from 150 to 0.

## Before and after

These are tests of the home page. I used Lighthouse 12.8.2, mobile, simulated throttling (a slow phone and network are simulated). I ran 3 tests for each version against `next start` on the same machine. The numbers are medians (the middle result).

| Metric                                     | Before (Prismic, SSR)              | After migration (live)                       | After fixes                           | After audit (Next 15)                |
| ------------------------------------------ | ---------------------------------- | -------------------------------------------- | ------------------------------------- | ------------------------------------ |
| Routes rendered on every request           | 7 of 10                            | 1 of 14 (`/sitemap.xml`, plus the email API) | Same                                  | Same                                 |
| Server response, median of 5 pages (local) | 58–92 ms                           | 2 ms                                         | 2 ms                                  | 2 ms                                 |
| Production cache                           | `no-store`, `x-vercel-cache: MISS` | `x-vercel-cache: HIT`                        | Same                                  | Same                                 |
| First Contentful Paint (time until the first text or image shows) | 2.8 s | 1.5 s                                        | 1.5 s (−46% vs before)                | 1.5 s                                |
| Speed Index (how fast the page fills in)   | 5.4 s                              | 1.8 s                                        | 1.7 s (−69% vs before)                | 1.7 s                                |
| Largest Contentful Paint                   | 4.8 s                              | 23.2 s                                       | 5.3 s (−77% vs live)                  | 3.9 s (−19% vs before, −83% vs live) |
| Total Blocking Time (time the page cannot respond to the visitor) | 0 ms                | 30 ms                                        | 40 ms                                 | 20 ms                                |
| Cumulative Layout Shift (how much the page jumps while it loads) | 0            | 0.008                                        | 0.008                                 | 0                                    |
| Total transfer                             | 578 KiB, 28 requests               | 4,322 KiB, 48 requests                       | 749 KiB, 49 requests (−83% vs live)   | 654 KiB, 49 requests                 |
| Hero image                                 | 301 KiB AVIF (Prismic CDN)         | 3,622 KiB JPEG (raw)                         | 162 KiB AVIF (−96% vs live)           | AVIF via `next/image`                |
| JavaScript transferred                     | 159 KiB                            | 245 KiB                                      | 246 KiB                               | 250 KiB                              |
| Lighthouse Performance                     | 73                                 | 75                                           | 80                                    | 88                                   |
| Lighthouse Accessibility                   | 96                                 | 92                                           | 92                                    | 92                                   |
| Lighthouse Best Practices                  | 100                                | 96                                           | 96                                    | 96                                   |
| Lighthouse SEO                             | 100                                | 100                                          | 100                                   | 100                                  |
| Site renders when the CMS request fails    | No (every page returns 500)        | Yes (prebuilt HTML)                          | Yes                                   | Yes                                  |
| Routes                                     | 10                                 | 14                                           | 14                                    | 14                                   |
| `next build`                               | 7.7 s                              | 16.7 s (prerenders 22 pages)                 | Passes (`HEAD` before the fix failed) | Passes                               |
| Next.js / React / TypeScript               | 12 (unpinned `latest`) / 17 / 4.5  | 14.2 / 18 / 5                                | Same                                  | 15.5.27 / 18 / 5                     |
| Node version declared                      | None                               | `>=18.18.0`                                  | Same                                  | Same                                 |
| `yarn audit`, runtime deps (today)         | 37 (5 critical)                    | 150 (3 critical)                             | Same                                  | **0**                                |

## What improved

**Pages are built once instead of on every visit.** Before, 7 of 10 routes called Prismic on every request. They also sent `no-store` cache headers. Vercel's response header showed `x-vercel-cache: MISS` on every 2022 capture in the Wayback Machine. Now 12 of 14 routes are prerendered (built ahead of time) at build time. They make 22 HTML pages, including 5 blog posts, 3 service pages and the coach page. Production returns `x-vercel-cache: HIT`. Lighthouse measured the live root document at 40–50 ms.

**Visitors see content sooner.** The HTML arrives at once. So First Contentful Paint dropped from 2.8 s to 1.5 s. Speed Index dropped from 5.4 s to 1.8 s. A visitor notices these first: the header, the headline and the layout.

**The site stays up when the CMS does not respond.** In the old design, one failed CMS request took the page down. This happened during testing. As committed, every Prismic-backed page now returns 500. The current site talks to Contentful only at build time. If Contentful has an outage, the live site keeps serving the last build.

**More content, same codebase.** 10 routes became 14. I added the blog (`/blog`, `/post/[slug]`), interviews, per-service pages (`/service/[slug]`) and website support. The sitemap now includes blog posts.

**A maintained stack.** Next 12 became Next 14.2. React 17 became React 18. The old package.json fixed `next` to `latest`. So any fresh install could pull a new major version. Contentful types are now generated (`yarn codegen` → `types/contentful.d.ts`). Before, people wrote them by hand. Forms gained validation (Formik + Yup), toast feedback and explicit SendGrid error handling. I added Google Analytics (Jul 2024).

## What got worse

**The home page hero image (fixed).** The LCP element was the same in both versions. It is the banner div with a CSS `background-image`. Before, the Prismic image CDN (a network that serves files fast) compressed it automatically (`auto=compress,format`). It served a 301 KiB AVIF. After the migration, the banner was a 3024×4032 JPEG. It came straight from Contentful at 3,622 KiB. That is 84% of the page's bytes. That is why live LCP is 23.2 s.

Fix: `HomeBanner` and `PageBanner` now render the image with `next/image` (`fill`, `priority`, `sizes="100vw"`). Also, `next.config.js` enables AVIF. Next.js now preloads the hero. It picks a width from `srcset`. It serves a 162 KiB AVIF on mobile. The page looks the same. Lighthouse's final screenshots before and after match.

LCP is now 5.3 s. Almost all of it is render delay (4.8 s), not loading. The image arrives at once. But `FadeInContainer` server-renders the whole home page at `opacity: 0`. It then fades the page in over 1.2 s after JavaScript hydrates (starts to run in the browser). The old site had the same wrapper.

**More JavaScript.** Shared First Load JS went from 86.9 kB to 134 kB. Most of the increase comes from Next 14's larger runtime and the `_app` chunk (16 → 44 kB). Home page JavaScript is up 54%. This cost does not yet show up as blocking time (TBT 30 ms).

**Small accessibility and console regressions.** Accessibility fell from 96 to 92. Best Practices fell from 100 to 96. Lighthouse flags these problems:

- Low text contrast on the banner (in both versions).
- A `<ul class="flex mt-4">` with children that are not `<li>`.
- React hydration errors #418, #423 and #425 in the console. These mean the server HTML and the client HTML disagree.

**Dependency audit (fixed).** I audited both lockfiles against the same advisory database (a list of known security flaws) on the same day. The migrated site had more findings than the old one: 150 runtime vs 37. Most came from 12 runtime dependencies that the code never imported. One example is `contentful-import`, which pulled in 12 high-severity `axios` advisories. The rest were in Next 14, which gets no more security patches. Only Next 15.5.24 or later fixes all of the remaining `next` advisories. They include 2 critical ones. One of the two is remote code execution (an attacker can run code on the server) in the image optimizer.

The fix has these parts:

1. Remove the 12 unused packages (150 → 46).
2. Upgrade to Next 15.5.27. The Pages Router and React 18 still work, with no code changes.
3. Pin patched versions of `lodash`, `lodash-es`, `postcss`, `nanoid` and `source-map-js` through `resolutions`.
4. Refresh the vulnerable dev-tool entries in the lockfile.

Result: **0 runtime vulnerabilities**. 5 build-time findings remain (3 high, 2 moderate). They are in `braces` and `postcss-selector-parser`. `braces` has no patched release. Tailwind 3 pins `postcss-selector-parser` to the vulnerable 6.x line. Both only process this repo's own source during builds.

ESLint is now a direct dev dependency. Before, it was installed only as a side effect of `contentful-import`. So when I removed that package, linting during builds turned off without a warning.

## Live production check

https://www.unleashedpotentiallifecoaching.com/ (and https://www.jessrebelo.com/, which serves the same build), Oct 9 2026, same Lighthouse settings, 3 runs:

| Category       | Median |
| -------------- | ------ |
| Performance    | 74     |
| Accessibility  | 92     |
| Best Practices | 96     |
| SEO            | 100    |

FCP 1.8 s, LCP 23.3 s, TBT 0 ms, CLS 0, 4,298 KiB across 48 requests. These match the local measurement of the same commit.

## Methodology

- I built both versions from git in scratch worktrees (temporary copies of the code). I used `yarn install --frozen-lockfile` and served them with `next start`. So the comparison is between production builds of the code. It is not a comparison between two live sites five years apart.
- The old version reads from the original Prismic repository, which is still public. It needed two local-only patches to run today. One patch encodes the GraphQL query in the URL. The other leaves out the `Authorization` header when no token is set. See [BASELINE.md](/work/unleashed-potential/baseline).
- Images come from each CMS's real CDN. So the hero image comparison shows what each CMS actually serves.
- Server response time is time to first byte (the time until the first data comes back). I measured it with `curl`, 20 requests per page, on localhost. This isolates rendering cost from network distance.
- I discarded the Lighthouse runs through the Wayback Machine. Timings served through the archive measure the archive.
- I measured "After audit" the same way (3 runs, image cache warmed). I smoke-tested every route on the Next 15 build (all 200, unknown path 404).
- I did not measure `HEAD` (`4835081`) because it did not build. The "After fixes" column includes the fix for that.
- I measured "After fixes" on a fresh build. One request warmed the image cache. The first run after a cold start (when Next.js encodes the AVIF) was slower (LCP 5.7 s, Performance 67). I excluded it from the median.
- I kept the raw Lighthouse JSON and build logs out of the repo.

## Backlog

The list is in order of impact. Items crossed out are done.

**Performance**

- ~~Hero image~~: done. Served through `next/image` as AVIF, 3,622 → 162 KiB.
- LCP render delay: `layouts/FadeInContainer.tsx` starts the home page at `opacity: 0`. So nothing counts as painted until hydration plus the 1.2 s fade. Render the banner outside the fade (or start at `opacity: 1`). This should take most of the remaining 4.8 s off LCP. This changes how the page appears, so it is a design decision.
- ~~Remove the 12 unused runtime dependencies~~: done.
- Render-blocking resources: Lighthouse estimates 560–710 ms of savings (the Google Fonts stylesheet). `next/font` would host the fonts on the site itself.
- Pages have no `revalidate`. So content edits in Contentful go live only after a redeploy. Add ISR (`revalidate`) or a Contentful webhook that starts a deploy.

**Correctness**

- ~~`HEAD` fails `next build`~~: done. `contexts/EmailsContext.tsx` checked `request?.status === 200`, but `sendClientEmail` returns `{ success, data }`. This broke the build. It also would have shown the error message for every successful form submission. It now checks `request.success`.
- Fix the React hydration mismatch (#418/#423/#425) and the `<ul>` markup on the home page.
- Banner text contrast (`text-cream` over the photo): add an overlay or a text shadow.

**Security**

- ~~Contentful tokens~~: done. `NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN` is a read-only delivery token. It goes to the browser on purpose, for the client-side pagination on the blog, podcast and interview pages. The second token is a Contentful personal access token (management, read/write). Only `yarn codegen` uses it. It was named `NEXT_PUBLIC_…_TWO` and listed in the `env` block of `next.config.js`. So any reference from a component would have put it in the public bundle. It is now `CONTENTFUL_MANAGEMENT_TOKEN`. I removed it from `next.config.js` and confirmed it is absent from `.next/static`. `contentful-management` is now a direct dev dependency. Codegen needs it, and before, it was installed only through `contentful-import`.
- ~~Revoke `FAUNA_SECRET`~~: done (2026-10-09). The key is revoked in Fauna and removed from the local `.env`. Fauna was removed from the code in July 2025.
- ~~Clear the `next` advisories~~: done, upgraded to 15.5.27.
- Remaining build-time findings: they go away with Tailwind 4 (`postcss-selector-parser`) and an upstream fix for `braces`. `next lint` is deprecated in Next 15. Run `npx @next/codemod@canary next-lint-to-eslint-cli .` before moving to Next 16.

**Documentation**

- README: add setup steps, the required environment variables and the Node version. Fix the stack list (Formik + Yup, no Prismic).
