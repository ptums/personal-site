# tumulty.me

This repository contains the website of Peter Tumulty, an independent software consultant. The live site is at [tumulty.me](https://tumulty.me).

The site shows:

- My services and how to book a call.
- Case studies, with baseline and results documents for each project.
- My posts ("Words").
- Testimonials.

## Stack

- [Astro 4](https://astro.build). The output is static HTML. There is no server runtime.
- TypeScript.
- Tailwind CSS.
- Markdown files for posts and proof documents. There is no CMS.
- [Vercel](https://vercel.com) for hosting.
- [PostHog](https://posthog.com) for analytics, in cookieless mode. A feature flag controls it. Refer to [Feature flags](#feature-flags).

## Get started

You must have Node.js 18.17.1 or later and npm.

1. Clone the repository.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env`. The site builds without values. Add `PUBLIC_POSTHOG_KEY` only if you test analytics.
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:4321.

Use npm only. Vercel installs with npm, and npm also keeps `yarn.lock` in sync.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Checks the posts, then builds the site into `dist/`. |
| `npm run preview` | Serves the build from `dist/`. |
| `npm run check:words` | Checks the posts for Obsidian-only syntax and broken images. |

There is no test suite and no lint script.

## Project structure

| Path | Contents |
|---|---|
| `src/pages/` | One file for each route. |
| `src/content/words/` | Posts, as Markdown. The file name is the URL slug. |
| `src/content/proof/` | Baseline and results documents, served at `/work/<project>/<doc>`. |
| `src/data/site.ts` | Name, job title, business, services, booking URL and feature flags. |
| `src/data/case-studies.ts` | Case studies, served at `/work/<slug>`. |
| `src/data/faq.ts` | FAQ for the Work with me page. |
| `src/data/structured-data.ts` | The JSON-LD graph for search engines. |
| `src/layouts/Layout.astro` | The shared page layout and all `<head>` tags. |
| `src/styles/global.css` | Tailwind base and the post styles (`.post-content`). |
| `db/` | Testimonials and other data in JSON. |
| `docs/` | Notes on SEO, analytics, accessibility and performance. |

## Routes

| Route | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/words` | All published posts, newest first. |
| `/words/<slug>` | One post. |
| `/words/rss.xml` | The RSS feed. |
| `/work-with-me` | Services, results and the FAQ. |
| `/work/<slug>` | One case study. |
| `/work/<project>/<doc>` | One baseline or results document. |
| `/testimonials` | Testimonials from `db/testimonials.json`. |
| `/privacy` | The privacy note. |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Generated at build time. |

Vercel also sends `/blog` and `/blog/post/<slug>` to `/words` and `/words/<slug>` with a permanent redirect (308). These redirects work only on Vercel, not in `npm run dev`.

## Add a post

1. Make a file in `src/content/words/`. The file name becomes the URL, for example `my-post.md` becomes `/words/my-post`.
2. Add this frontmatter:

   ```md
   ---
   title: "Post title"
   date: "YYYY-MM-DD"
   summary: "One sentence for the Words list."
   tagLine: "Optional short hook line"
   published: true
   ---
   ```

3. Write the post in Markdown. Do not add a `# Title` line, because the page prints the title.
4. Add links to related pages on the site, and add links back to the post from those pages.
5. Run `npm run check:words`.

A post with `published: false` gets no page and does not show in the list.

The `src/content/words/` folder is also an Obsidian vault. Git ignores the `.obsidian/` folder.

## Feature flags

The flags are constants in the source code. To change a flag, edit the file, commit and deploy.

| Flag | File | Value now | What it controls |
|---|---|---|---|
| `ALLOW_INDEXING` | `src/data/site.ts` | `true` | Lets search engines index the site. |
| `ENABLE_POSTHOG` | `src/data/site.ts` | `false` | Loads PostHog analytics. When it is `false`, no page loads the PostHog library. |
| `SHOW_FAQ` | `src/data/faq.ts` | `false` | Shows the FAQ on the Work with me page. |

## Environment variables

| Variable | Needed | Use |
|---|---|---|
| `PUBLIC_POSTHOG_KEY` | Only when `ENABLE_POSTHOG` is `true` | The PostHog project key. It starts with `phc_` and is public by design. |
| `PUBLIC_POSTHOG_HOST` | No | Only for a PostHog project in the EU. The default is `https://us.i.posthog.com`. |

Put local values in `.env`. Git ignores this file. Put production values in the Vercel project settings.

## Deploy

1. Make a branch and a pull request to `main2`.
2. Vercel builds a preview for the pull request.
3. Merge the pull request. Vercel then deploys the live site.

`main2` is the production branch. There is no `main` branch.

## Documents

- [docs/seo.md](docs/seo.md): search engine setup and the launch steps.
- [docs/analytics.md](docs/analytics.md): the PostHog setup and how to turn it on.
- [docs/accessibility-audit.md](docs/accessibility-audit.md): the WCAG 2.2 AA audit.
- [docs/performance-baseline.md](docs/performance-baseline.md): Lighthouse scores before analytics.
- [PROCESS.md](PROCESS.md): the steps for each change.
- [CLAUDE.md](CLAUDE.md): rules for AI coding agents in this repository.
