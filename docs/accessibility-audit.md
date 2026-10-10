# Accessibility audit

Target: WCAG 2.2 Level AA. Branch `a11y-sweep`, built with `npm run build` and served with `npx astro preview`.

## How the checks were run

- **Lighthouse 12.8.2**, accessibility category only, at 375px (mobile emulation) and 1440px (desktop).
- **axe-core 4.14.0**, injected with Playwright after a 2.5 second wait for the fade-in animations, with the tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` and `best-practice`.
- **Scripted checks** for what those tools miss: skip link, landmarks, heading order, focus outline on every Tab stop, links that open a new tab, target sizes, reflow at 320px, WCAG 1.4.12 text spacing, and running animations under `prefers-reduced-motion: reduce`.
- The audit tools were installed in a scratch folder, not added to `package.json`. Raw results are in `docs/accessibility/before.json` and `after.json`.

\* Lighthouse won't audit a page that returns HTTP 404, so the 404 row has no Lighthouse score in the "before" run.

## Before

| Page | Path | Lighthouse 375px | Lighthouse 1440px | axe violations 375px (elements) | axe violations 1440px (elements) |
|---|---|---|---|---|---|
| Home | `/` | 95 | 95 | color-contrast (3) | color-contrast (5) |
| Words | `/words` | 95 | 95 | color-contrast (12) | color-contrast (12) |
| Post | `/words/the-power-of-the-map-method` | 96 | 96 | color-contrast (12), scrollable-region-focusable (1) | color-contrast (12) |
| Work with me | `/work-with-me` | 100 | 100 | none | none |
| Testimonials | `/testimonials` | 100 | 100 | none | none |
| 404 | `/this-page-does-not-exist` | n/a* | n/a* | none | none |

### Scripted checks (before)

- **Structure:** every page has `lang="en"`, a unique title, header, nav, main and footer landmarks, one h1, and no skipped heading levels. There is **no skip link**. There is **no custom 404 page**: missing URLs get the framework default (Vercel's page in production).
- **Keyboard:** every link is reachable by Tab and shows the browser's default focus ring; there is no site-defined focus style. On the home page, **2 of the 8 project cards are hidden** (`hidden` class) until the scroll box is scrolled, so keyboard and screen reader users can't reach them directly.
- **Content:** images have alt text. **9 links on the home page open a new tab without saying so** (Github, LinkedIn, and the project Source, Baseline, Results and Site links). No vague link text ("here", "read more").
- **Contrast** (from axe): the home subtitle, the "Personal" badge and the project tools line; the post titles and tag lines on `/words`; the date and the comment colour in code blocks on posts.
- **Target size:** the home Connect links and project links are 17px tall. They pass WCAG 2.5.8 through its spacing exception (no other target within a 24px circle), but are below 24px.
- **Reflow:** at 320px, `/testimonials` scrolls sideways by 22px (the h1's 8px letter-spacing). With WCAG text spacing applied, the post page overflows by 42px (inline code that can't wrap). On phones the post's wide table scrolls but **can't be focused by keyboard** (axe `scrollable-region-focusable`).
- **Motion:** with `prefers-reduced-motion: reduce`, **6 animations still run** on the home page.
