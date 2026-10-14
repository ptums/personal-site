---
title: "Baseline: Hall of Fame website"
description: "Website audit baseline for a non-profit site: Lighthouse accessibility and SEO scores, HTTPS, mobile readiness and upkeep before a Next.js rebuild."
---

# Baseline: aphshalloffame.com (before migration)

Related: [Results: Hall of Fame](/work/hall-of-fame/results) · [All projects](/#projects-heading)

Snapshot: Internet Archive capture `20201026035002` of `http://aphshalloffame.com/`. This is the last version of the old site before the rebuild started on 2020-11-18.
Recorded: 2026-10-09

The old site was never in a git repo (a tool that saves the history of a project's files). The Internet Archive (a public website that stores old copies of web pages) is the only record of it.

For the Lighthouse runs, I did these steps:

1. I downloaded the archived HTML, stylesheet and images as they were.
2. I changed the absolute `http://aphshalloffame.com/` links to local paths.
3. I served the copy from localhost (the test computer) with gzip (a method that makes files smaller for sending). The original Apache server used gzip, according to its archived response headers.

Lighthouse is a tool that scores a web page for speed (Performance), accessibility, good practice (Best Practices) and search readiness (SEO).

## The site

| Check | Result |
| --- | --- |
| How it was built | Hand-written static HTML. It used inline `<font>` tags and `style=""` attributes, plus one shared `style.css` (3.9 KB) |
| Server | Apache (archived `Server` header) |
| Homepage last modified | 2015-12-18 (archived `Last-Modified` header). It was still unchanged in October 2020 |
| Homepage announcement in Oct 2020 | "Congratulations Class of 2016 Inductees". This was four years out of date |
| Files captured by the archive (before June 2021) | 185: 107 HTML pages, 1 stylesheet, 35 JPEG, 40 PNG, 2 BMP |
| Inductee pages | 88. Each had one hand-written HTML file (`/Inductees/JosephOReedJr.html`) |
| Ceremony photo galleries | 6 (2003, 2005, 2007, 2010, 2012, 2014). None for 2016 |
| Ceremony photo pages | One HTML page for each photo (`/2010Page/pic1.html`, `pic2.html`, ...). Each page shows a thumbnail and a "Next Photo" link |
| Navigation | A sidebar that lists every inductee. The site copied it into every page |
| Copies of the sidebar in sync | No. I sampled 5 pages. The homepage and an inductee page list 88 inductees. Mission Statement lists 76. The 2010 ceremony page lists 63 |
| Files to edit to add one inductee to the navigation | Every page that has the sidebar: up to 107 |
| Forms (contact, nomination) | None |
| Events, donation, or ticket information | None |

## Security and search

| Check | Result |
| --- | --- |
| HTTPS (the secure way to load a site) | No. Every archived capture before June 2021 is `http://`. The pages link their own stylesheet and images with fixed `http://` URLs |
| `<title>` (the page name in the browser tab) | "Main Page @ aphshalloffame.com" on all 5 sampled pages. This includes inductee and ceremony pages |
| Meta description (the summary that search results show) | Present but empty (`content=""`) |
| Sitemap or robots.txt (files that guide search engines) | None captured |
| Mobile viewport tag (a line that fits the page to a phone screen) | None. Phones show the desktop layout, shrunk to fit |
| `<!doctype>` (a line that tells the browser which HTML rules to use) | None. The browser used quirks mode (an old, unreliable way to draw pages) |
| `lang` attribute (a line that names the page language) | None |
| Images with alt text (a text description for screen readers) | 0 of 6 on the sampled pages |

## Lighthouse

Test settings:

- Lighthouse 12.6.1.
- Chrome 154.
- Mobile preset with simulated throttling (the test slows the connection on purpose).
- Incognito.
- 3 runs for each page. The table shows the median (the middle result).
- The pages came from the local copy described above.

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| Home (`/`) | 99 | 53 | 82 | 82 |
| Inductee (`/Inductees/JosephOReedJr.html`) | 94 | 53 | 82 | 82 |
| Ceremony (`/2010Page/pic1.html`) | 95 | 53 | 82 | 82 |

The next table shows the speed measures:

- FCP (First Contentful Paint: the time until the first item shows).
- LCP (Largest Contentful Paint: the time until the biggest item on the page shows).
- TBT (Total Blocking Time: how long the page ignores a user's clicks while it loads).
- CLS (Cumulative Layout Shift: how much the page content jumps while it loads).

| Metric | Home | Inductee | Ceremony |
| --- | --- | --- | --- |
| FCP | 0.75 s | 0.75 s | 0.75 s |
| LCP | 2.1 s | 2.6 s | 3.0 s |
| TBT | 0 ms | 0 ms | 0 ms |
| CLS | 0 | 0.11 | 0 |
| Total transfer | 216 KiB | 303 KiB | 366 KiB |
| Requests | 4 | 5 | 5 |
| Photos shown | 0 | 1 | 1 (a 229×155 thumbnail) |

These audits (single checks that Lighthouse runs) failed on all three pages:

- Accessibility: `color-contrast`, `heading-order`, `html-has-lang`, `image-alt`, `target-size`
- Best Practices: `doctype`, `viewport`, `font-size`, `image-size-responsive`
- SEO: `meta-description`, `image-alt`

## Notes

- The high Performance scores are real. The old pages are a few kilobytes of HTML with no JavaScript, so they show quickly. They also show very little. The homepage has no photos. Each ceremony page shows one thumbnail.
- The Best Practices score is too high. Lighthouse treats `localhost` as secure. So it does not count the missing HTTPS against the old site. On the real `http://` origin, the site would also fail `is-on-https`.
- The 404 in the console on every page is the missing favicon (the small icon in the browser tab) in the local copy. I do not count it as a finding.
- The sidebar counts come from `grep -c 'Inductees/'` on each downloaded page. The "up to 107 files" figure assumes that every archived HTML page has the sidebar. This was true for all 5 sampled pages.
- Evidence: `curl -sI "https://web.archive.org/web/20201026035002id_/http://aphshalloffame.com/"` (the `x-archive-orig-*` headers), and the CDX listing (the archive's list of saved files) `https://web.archive.org/cdx/search/cdx?url=aphshalloffame.com/*&to=20210601&collapse=urlkey`.
