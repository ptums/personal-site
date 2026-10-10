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

## After

| Page | Path | Lighthouse 375px | Lighthouse 1440px | axe violations 375px (elements) | axe violations 1440px (elements) |
|---|---|---|---|---|---|
| Home | `/` | 100 | 100 | none | none |
| Words | `/words` | 100 | 100 | none | none |
| Post | `/words/the-power-of-the-map-method` | 100 | 100 | none | none |
| Work with me | `/work-with-me` | 100 | 100 | none | none |
| Testimonials | `/testimonials` | 100 | 100 | none | none |
| 404 | `/this-page-does-not-exist` | 100† | 100† | none | none |

† Lighthouse still refuses HTTP 404 responses, so the 404 row was scored from the same built `404.html` served with status 200 by a plain file server. axe ran on a real missing URL.

### Scripted checks (after)

Every page has a skip link, one h1, no skipped heading levels, and no hidden project cards. Every Tab stop shows the site focus style. No page scrolls sideways at 320px or at 640px (1280px at 200% zoom), with or without WCAG text spacing. With reduced motion, no animations run and nothing is left invisible.

## What was fixed

| Category | Fix | Commit |
|---|---|---|
| Structure | "Skip to main content" link as the first Tab stop, visible on focus, targeting `<main id="main-content">`. | `99d5c725` |
| Keyboard | One focus style for every link, button and focusable region: 2px emerald-800 outline, 2px offset (7.7:1 on white). Tab order checked on every page; no traps; booking and email links work with Enter. | `5fe81e6b` |
| Keyboard | Post tables get `tabindex="0"` at build time so they can be scrolled by keyboard on phones. | `0bd53751` |
| Content | Hidden "(opens in a new tab)" text on the home page Github, LinkedIn and project links. Logo alt text now names the link's destination. | `df904257` |
| Contrast | Failing text moved to the nearest passing shade: emerald-500/600 to emerald-700, gray-400 to gray-500, stone-500 to stone-600, code comments `#6A737D` to `#959da5`. | `40f4000c` |
| Reflow and motion | `/testimonials` h1 letter-spacing reduced below 640px. Inline code and over-long heading words wrap. `prefers-reduced-motion` turns off all animations and transitions. | `03db6c56` |
| Hidden content | All 8 project cards render (cards 4 to 8 were `display: none` until scrolled). The scroll box is a focusable region labelled "Projects"; "Projects" is now an h2 and card titles h3, styled as before. | `67723435` |
| 404 | New site-styled 404 page with one h1 and links to Home and Work with me. | `a36180aa` |

## Follow-up decisions

| Item | Decision | Commit |
|---|---|---|
| Current-page marker in the nav | Darkened from emerald-300 (1.6:1) to emerald-600 (3.8:1), meeting WCAG 1.4.11 for state indicators. Still green, just less faint. | `2b11c441` |
| Long words in post titles on phones | Below 640px post titles are text-3xl with normal letter-spacing, and the post body drops its extra side padding inside the card. No title word breaks mid-word at 320px; only natural breaks at hyphens remain. Unchanged from 640px up. | `feaecd85` |
| Small links on the home page | Kept. They pass WCAG 2.5.8 through its spacing exception at 375px and 1440px; enlarging them would change the layout. | |
| Contrast colour changes | Kept the nearest passing shades listed above. | |
| Show more button vs. render all | Kept "render all": it keeps the look identical and removes code. | |

## What was left, and why

- **Small links on the home page** (see above): pass through the spacing exception.
- **Extra Tab stops.** The project scroll box and post tables are Tab stops even on wide screens where they don't scroll. This is the standard trade-off for keyboard-scrollable regions.
- **Text-only enlargement.** With the browser's default font set to 32px (text alone at 200%, no zoom), the home page overflows by about 98px at 1280px (the content card's long name heading can't shrink next to the photo), and the one-word headings "Testimonials" and "Tumulty" overflow at 375px. WCAG 1.4.4 is met through browser zoom, which passes at 200% and 400% (320px reflow), so this was not changed. Fixing it would mean reworking the home layout.
- **Third-party pages.** The Cal.com booking page and GitHub links were not audited.

## Additional automated checks (follow-up)

- **Windows High Contrast (forced colors, emulated in Chromium):** every Tab stop on all six pages keeps a 2px outline, and the current-page marker stays visible (system highlight colour).
- **WebKit (Safari's engine, 26.4):** with Safari's default Tab, only scrollable regions get focus, as expected; with Option+Tab every link on every page is reachable, shows the focus outline, and the skip link is first and moves focus to the main content. On `/testimonials` the main content has no links, so the next Tab after the skip link correctly leaves it.
- **Firefox:** could not be launched in this environment (timed out), so it is still a manual check.

## Manual testing still needed

- A screen reader pass: VoiceOver on macOS (Safari) and iOS, and NVDA or JAWS on Windows. Check the landmarks and headings lists, the "Projects" region, the new-tab announcements, the email links, and the current page in the nav.
- Keyboard-only use in real Safari (the WebKit engine passed with Option+Tab) and in Firefox (not tested here).
- Browser zoom at 200% and 400%, and a large default font size, in real browsers.
- Windows High Contrast on a real Windows machine (passed in Chromium emulation).
- On the live site after deploy: confirm Vercel serves the new 404 page for a missing URL.

## VoiceOver pass by the site owner (2026-10-10)

Corrections from a manual VoiceOver run, applied on branch `heading-fixes` (visual styles unchanged):

- **Home:** "Connect with me" and "Projects" are h3; project titles are h4 (under the h1 name and h2 tagline).
- **Words:** each post title is an h2 and its tag line an h3.
- **Testimonials:** each person's name is an h2 and their title and company an h3.
- **Work with me:** the opening line is an h2; What I do, Results, How an engagement works, Testimonials and Get in touch are h3. Each section is also a labelled Tab stop (`tabindex="0"`, named by its heading), so Tab moves section by section as well as through the buttons and links. With a screen reader, VO+Command+H (next heading) and the rotor also move between sections.

