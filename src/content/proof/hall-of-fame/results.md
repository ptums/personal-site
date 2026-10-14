---
title: "Results: Hall of Fame website"
description: "Next.js website migration results: Lighthouse accessibility 53 to 96, SEO 82 to 100, HTTPS, mobile layout, free hosting and one-file content updates."
---

# Results: aphshalloffame.com (after migration)

Related: [Baseline: Hall of Fame](/work/hall-of-fame/baseline) · [All projects](/#projects-heading)

Measured: 2026-10-09, against `main` at `e004699` and the live site at `https://www.aphshalloffame.com/`. I measured the live site again the same day, after the quick-win fixes went live (`4efc2c8`, PR #12). See [Quick-win fixes](#quick-win-fixes).

Lighthouse is a tool that scores a web page for speed (Performance), accessibility, good practice (Best Practices) and search readiness (SEO).

## Before and after

| Measure | Old site (Oct 2020) | New site (Oct 2026) |
| --- | --- | --- |
| Inductee profiles | 88 | 141 (every class, 2003 to 2026) |
| Most recent class shown | 2016. The homepage was last modified 2015-12-18 | 2026 |
| Pages in the sitemap (a list of pages for search engines) | No sitemap | 155 |
| HTTPS (the secure way to load a site) | No | Yes. `http://` returns a 308 redirect (it sends the visitor to the secure address). HSTS (a rule that makes browsers use HTTPS only) is set for 2 years (`max-age=63072000`) |
| Works on a phone | No viewport tag (a line that fits the page to a phone screen) | Responsive layout with a mobile menu |
| Unique page titles | 1 ("Main Page @ aphshalloffame.com") | 152 of 154 pages. Donate and Contact used the homepage title and description (fixed below) |
| Meta descriptions (the summary that search results show) | Empty | 154 of 154 pages have one |
| Images with alt text (a text description for screen readers) | 0 of 6 sampled | Profile photos use the inductee's name. Homepage grid links read out each name. Ceremony photos use file names (see backlog) |
| Lighthouse Accessibility | 53 | 96 |
| Lighthouse SEO | 82 | 100 |
| Lighthouse Best Practices | 82 (too high, see baseline) | 96 to 100 (89 to 96 before the quick wins) |
| Lighthouse Performance | 94 to 99 | 83 to 94 (76 to 94 before the quick wins, see below) |
| Files edited to add an inductee | Up to 107 (the site copied the sidebar into every page) | 1 data file (`db/members.json`). The site generates the profile, directory, homepage grid and sitemap from it |
| Sidebar copies in sync | No: 88, 76 and 63 names on different pages | One source, so the copies always match |
| Ceremony photos | One page load for each photo | One gallery page for each year, with a slider, a grid and a lightbox (a pop-up that shows a photo large) |
| Forms | None | Contact and Bio Nomination |
| Events and donation info | None | Events page with invitation and ad PDFs, Donate page with form |

The class of 2026 went live in one commit, `26c0d72`. The commit changed 11 files. It included 10 inductees, the event page, the invitation and ad PDFs, and the menu.

## Lighthouse

This section shows the first measurement, at `e004699`, before the quick-win fixes. For the numbers after the fixes, see [Live site after deploying](#live-site-after-deploying).

The test settings match the baseline:

- Lighthouse 12.6.1.
- Chrome 154.
- Mobile preset with simulated throttling (the test slows the connection on purpose).
- Incognito.
- 3 runs for each page. The tables show the median (the middle result).

I tested the same three pages as the baseline. I measured them on the live site (Vercel) and on a local production build (`pnpm build && pnpm start`). The local build allows a fair comparison with the baseline's local copy.

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Home (`/`) | 84 (local 81) | 96 | 96 | 100 |
| Inductee (`/inductee/JosephOReedJr`) | 94 (local 90) | 96 | 96 | 100 |
| Ceremony (`/ceremony/2010`) | 76 (local 79) | 96 | 89 | 100 |

The next table shows the speed measures for the live site:

- FCP (First Contentful Paint: the time until the first item shows).
- LCP (Largest Contentful Paint: the time until the biggest item on the page shows).
- TBT (Total Blocking Time: how long the page ignores a user's clicks while it loads).
- CLS (Cumulative Layout Shift: how much the page content jumps while it loads).

Live site:

| Metric | Home | Inductee | Ceremony |
| --- | --- | --- | --- |
| FCP | 0.95 s | 0.86 s | 0.98 s |
| LCP | 4.5 s | 3.1 s | 7.7 s |
| TBT | 0 ms | 0 ms | 0 ms |
| CLS | 0 | 0 | 0 |
| Total transfer | 1,300 KiB | 436 KiB | 2,977 KiB |
| Requests | 165 | 19 | 59 |
| Photos shown | 10 portraits (141 downloaded) | 1 | 19 |

### Old vs new, same page

| Page | Performance | Accessibility | LCP | Transfer |
| --- | --- | --- | --- | --- |
| Home | 99 → 84 | 53 → 96 | 2.1 s → 4.5 s | 216 → 1,300 KiB |
| Inductee | 94 → 94 | 53 → 96 | 2.6 s → 3.1 s | 303 → 436 KiB |
| Ceremony | 95 → 76 | 53 → 96 | 3.0 s → 7.7 s | 366 → 2,977 KiB |

### Reading the Performance numbers

The new site scores lower on Performance for the homepage and the ceremony page. These are the reasons:

- **The homepage downloads every portrait.** `MemberGallery` starts with all 141 members (`useState(members_db)`). It filters to the 2026 class only after the page loads. Visitors see 10 portraits but download 141 (142 image requests, 737 KiB of images). The old homepage had no photos at all.
- **The ceremony page does more.** The old ceremony page showed one thumbnail. The new page loads the whole 2010 gallery of 19 photos. The cost for each photo is about the same. The new gallery uses roughly 157 KiB for each photo. The old site used about 155 KiB for each photo page after the first. This is an estimate from the size of 2010c1.jpg. I did not measure the whole old gallery. The old site needed a separate page load for every photo.
- **Images are not optimized yet.** On the ceremony page, Lighthouse estimates 1,341 KiB of savings from modern image formats and 501 KiB from compression. Cloudinary (the image host) can do both by URL (`f_auto,q_auto`). On the homepage, the LCP element is the CSS background banner. The browser finds it late.

The inductee profile is the page most people reach from a shared link. It is now as fast as the old one (94). It scores 96 on Accessibility instead of 53.

These audits (single checks that Lighthouse runs) still fail:

- Accessibility: `color-contrast` on the light-blue section subheading and the year filter buttons. This affects all pages.
- Best Practices: `errors-in-console`. A 404 appears on every page. On the ceremony page, React hydration errors #418 and #423 also appear (the server HTML and the browser HTML do not match).
- Ceremony page only: `image-aspect-ratio`, `image-size-responsive`, `unsized-images`, `font-display`.

## Build and setup

### Fresh-clone setup

Date: 2026-10-09. Computer: macOS 27.0, Node 24.20.0, pnpm 10.34.1. I did these steps:

1. I cloned `main` into a new folder.
2. I copied in `.env.local` (Cloudinary keys).
3. I followed the README.

| Step | Time |
| --- | --- |
| `git clone` | under 1 s |
| `pnpm install --frozen-lockfile` | 4 s |
| `pnpm build` | 16 s (13 static pages plus generated inductee and ceremony pages) |
| `pnpm start` to first 200 response | 1 s |
| Total, clone to working site | 21 s |
| Steps that failed or needed a guess | None, given the Cloudinary keys |

Caveat: the pnpm store (the local cache of packages) was already warm on this machine. A cold machine will take longer to download packages. The build needs the Cloudinary keys. The ceremony and inductee pages get their image lists from Cloudinary at build time.

### Dependency check

`pnpm audit` on 2026-10-09 found **44 known vulnerabilities (2 critical, 23 high, 17 moderate, 2 low)**. The count for production dependencies only (`--prod`) is 32.

| Package | Critical | High | Moderate | Low |
| --- | --- | --- | --- | --- |
| next 14.2.35 | 2 | 8 | 11 | 2 |
| brace-expansion | | 6 | 3 | |
| postcss | | 2 | 2 | |
| sharp | | 3 | | |
| cloudinary | | 1 | | |
| glob, braces, source-map-js | | 3 | | |
| postcss-selector-parser | | | 1 | |

Both critical advisories are remote code execution issues in Next.js (an attacker could run code on the server). Next.js 15.5.24 fixes them. One affects Windows-hosted servers. This does not apply here. The other is in the Image Optimization API when AVIF files are involved. This site uses `next/image` with remote Cloudinary images. On Vercel, the platform handles image optimization. This may reduce the risk, but I have not verified that. The first item in the backlog is to upgrade.

The old site had no dependencies to audit. It also ran unpatched Apache over plain HTTP. I cannot measure that risk from the archive.

## How this was measured

- Baseline: see [BASELINE.md](/work/hall-of-fame/baseline).
- Lighthouse: `lighthouse <url> --output=json --chrome-flags="--headless=new --incognito"`, three runs for each page, median of each value.
- Titles and descriptions: I fetched every URL in `https://www.aphshalloffame.com/sitemap.xml` (155). I read the `<title>` and `<meta name="description">` of each. One URL failed. The sitemap lists `/ceremony`, which returns 404.
- Gallery photo counts: unique Cloudinary file names under `Ceremonies/<year>/` in each live ceremony page.

## Quick-win fixes

I applied and measured these fixes on 2026-10-09, on top of `e004699`. They went live the same day: commit `9053992`, merged to `main` in PR #12 (`4efc2c8`).

### Lighthouse, before and after the fixes

I served both builds locally with `pnpm start`. I measured them in the same session and alternated between them. The settings are the same as above (mobile, 3 runs, median). The "before" column is a clean build of `e004699`. Every run of each page scored within 3 points of the others.

| Page | Performance | Best Practices | LCP | Transfer | Requests |
| --- | --- | --- | --- | --- | --- |
| Home | 81 → **88** | 96 → **100** | 5.1 s → **3.9 s** | 1,299 → **539 KiB** | 165 → **33** |
| Inductee | 90 → 90 | 96 → **100** | 3.6 s → 3.6 s | 436 → 432 KiB | 19 → 19 |
| Ceremony (2010) | 77 → **80** | 89 → **96** | 6.5 s → **5.5 s** | 2,981 → **1,212 KiB** | 59 → **45** |

Accessibility stayed at 96 and SEO at 100 on all three pages. Production JavaScript on the homepage, History and Mission Statement dropped from 239 kB to 104 kB, 98.5 kB and 98.5 kB (first-load JS from `next build`).

The next table puts the old site and the new site side by side:

| Page | Old site | New site before fixes | New site after fixes |
| --- | --- | --- | --- |
| Home, Accessibility | 53 | 96 | 96 |
| Home, SEO | 82 | 100 | 100 |
| Home, Best Practices | 82 | 96 | 100 |
| Home, Performance | 99 | 81 | 88 |
| Ceremony, transfer for the whole gallery | one 366 KiB page load for each photo | 2,981 KiB for 19 photos | 1,212 KiB for 19 photos |

### What changed

| Fix | Files | Effect |
| --- | --- | --- |
| The homepage grid starts on the default year | `components/shared/MemberGallery.tsx` | 141 portraits downloaded for each visit → 10 |
| The gallery gets only name, slug and year from a server component, so the browser does not receive biographies. I removed the unused React Query provider and dependency | `components/shared/MemberGallerySection.tsx` (new), `MemberGalleryQueryProvider.tsx` (deleted), `package.json` | Homepage JS 239 kB → 104 kB |
| The banner is a prioritized `next/image` instead of a CSS background | `app/page.tsx`, `tailwind.config.js` | The browser finds and preloads the banner at once, and the site serves it at the right size |
| Cloudinary `f_auto,q_auto` on ceremony photos, `h_1200` for slides, explicit width and height, only the first slide loads at once | `app/ceremony/[year]/page.tsx`, `components/GallerySlider.tsx` | Ceremony page 2,981 KiB → 1,212 KiB |
| The slider CSS comes from the bundled `slick-carousel@1.8.1`. Before, a layout injected it from a CDN into `<head>` | `app/ceremony/[year]/layout.tsx` (deleted), `components/GallerySlider.tsx` | This fixed the hydration errors (#418, #423). Those errors made every ceremony page draw again from scratch in the browser. It also removed two third-party requests that blocked rendering |
| Ceremony photo alt text: "2010 induction ceremony, photo 1" instead of the file path | `app/ceremony/[year]/page.tsx` | Screen readers can read it |
| I added a favicon | `app/icon.svg` | This fixed the 404 in the console on every page |
| Inductee photo: `https` URL, and I removed the deprecated `layout` prop | `app/inductee/[slug]/page.tsx` | No `http://` image request, no console warning |
| **I corrected the ceremony date to Thursday, October 15, 2026** on Events and Donate. It said October 17, which is a Saturday. Source: the committee's invitation PDF and "3-INV 2026 inside" | `db/events.json`, `db/donate.json` | It matches the printed invitation |
| The Events advertise form embedded a Google Doc that returns 410 Gone. It now shows the 2026 ad PDF | `db/events.json` | The form view works again |
| I updated the Events meta description. It had 2020/2021 text | `db/pageSEO.json` | It is correct in search results |
| Donate and Contact use their own title and description | `app/donate/page.tsx`, `app/contact/page.tsx` | The two pages that shared the homepage title now have their own |
| I fixed 338 doubled apostrophes (`Men''s Club`) across 89 lines of biographies | `db/members.json` | The bios read correctly |
| I added the 2007 gallery to the Ceremonies menu (8 photos were in Cloudinary but not linked) | `db/navigation.json`, `db/ceremonies.json` | This restores a gallery from the old site |
| I removed `/ceremony` from the sitemap | `app/sitemap.ts` | No 404 in the sitemap |
| I removed the dead `/api/keep-awake` cron, the `bio-updater`/`dump`/`seed` scripts, and the "mongodb" keyword | `vercel.json` (deleted), `package.json`, `README.md` | Nothing points at code that no longer exists |

After the fixes, the browser console is empty on Home, Inductee, both ceremony pages I checked, Events, Donate and Contact.

### Live site after deploying

I measured `https://www.aphshalloffame.com/` again after the merge. I used the same settings (mobile, 3 runs, median) and the same three pages. "Before" is the first live measurement at `e004699`.

| Page | Performance | Best Practices | LCP | Transfer | Requests |
| --- | --- | --- | --- | --- | --- |
| Home | 84 → **92** | 96 → **100** | 4.5 s → **3.4 s** | 1,300 → **540 KiB** | 165 → **33** |
| Inductee | 94 → 94 | 96 → **100** | 3.1 s → 3.1 s | 436 → 433 KiB | 19 → 19 |
| Ceremony (2010) | 76 → **83** | 89 → **96** | 7.7 s → **4.8 s** | 2,977 → **1,292 KiB** | 59 → **45** |

Accessibility stayed at 96 and SEO at 100 on all three pages. TBT and CLS stayed at 0. These are the single Performance runs: Home 85, 92, 92; Inductee 94, 94, 94; Ceremony 83, 78, 85.

The live numbers are a little better than the local ones, as they were before the fixes. The Vercel CDN (a network of servers close to the visitor) serves the pages and the banner image from closer and with better compression than `pnpm start` on a laptop.

Compare the homepage with the old site. Before, it was 15 points behind on Performance (99 → 84). Now it is 7 points behind (99 → 92). It also shows 10 portraits and a full-width photo that the old page did not have. The ceremony page loads the whole 19-photo gallery in 1,292 KiB. On the old site, that amount would buy about seven photos: 366 KiB for the first page load and about 155 KiB for each one after.

These audits still fail on the live site:

- Accessibility: `color-contrast` (light-blue subheading and year buttons). This affects all three pages. It is the only Accessibility failure left.
- Best Practices, ceremony page only: `image-aspect-ratio`. On a phone, the slider is 292px wide, but the site forces each photo to 600px tall. So landscape photos get squashed to about a third of their real width. This already failed at `e004699`, where the slider also fixed the height at 600px. See the backlog.
- Performance diagnostic, ceremony page only: `font-display` still flags some web fonts.
- These no longer fail: the console errors, the hydration errors, `unsized-images` and `image-size-responsive` from the first measurement.

### Tried and reverted

- `lazyLoad: 'ondemand'` on the ceremony slider. It cut transfer to 957 KiB. But it caused a large layout shift (CLS 0.39) and a later LCP, and Performance fell to 59. I reverted it.

## Backlog: what's left

**Security**

- Upgrade Next.js from 14.2.35 to 15.5.24 or later. This clears both critical advisories and most of the high ones. `pnpm audit` still reports 44 after the quick wins, because none of the fixes changed Next.js. Next 15 also needs React 19. So I must check `react-slick`, `react-18-image-lightbox` and `@headlessui/react`. For that reason, the upgrade is not in the quick wins.

**Content (needs the committee)**

- Cloudinary has no photos for the 2012, 2018, 2024 or 2026 ceremonies. The old site had a 2012 gallery, so those photos existed at one point. We can add 2026 photos after October 15.
- The Donate page says "the 10th induction ceremony". With 2003 through 2026, it would be the 11th. Confirm with the committee.

**Performance**

- Homepage LCP (3.4 s live, 3.9 s local) is now mostly render delay (2.4 s). The page waits for stylesheets and about 280 KiB of web fonts. Load fewer font weights: `app/font.ts` requests six Open Sans weights plus italics.
- The ceremony slider distorts photos on phones. The fixed 600px height and the narrow slide squash them (`image-aspect-ratio`). Cap the height instead of fixing it (for example `max-height: 600px; height: auto; max-width: 100%`). Then check CLS again, because the slides now depend on the fixed height.
- Ceremony LCP (4.8 s live, 5.5 s local) is the 1200px-tall first slide. To use smaller responsive sizes, first change the slider's fixed 600px height.

**Accessibility**

- Raise the contrast of the light-blue subheading and the active year button (`site.lightBlue`, `#59a7cf`). To fix this, darken the brand color. That is a design decision. This is the only Accessibility failure left.
