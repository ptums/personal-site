# PROCESS.md: Change Playbook

**Trigger:** when the human says _"read process.md and ship <change>"_, follow this file top to bottom. Read `CLAUDE.md` (stack, routing, rules) and `SELF_IMPROVEMENT.md` (lessons) first.

This is a personal site with one owner. You do the work; the human decides at gates. Target: small, verified changes that reach the live site without surprises.

```
Preflight -> Scope -> Build -> Verify -> Commit -> Preview -> Ship
   auto       G0       auto     auto      G1        auto      G2
```

G = human gate. Between gates, run autonomously.

## What matters (keep this in view at every decision)

| Goal                                         | What you must produce                                                                    |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| The site represents the owner accurately     | Their copy, verbatim. Typos and gaps are flagged, never silently fixed or invented.      |
| Nothing breaks for visitors                  | A clean `npm run build`, a browser check of every changed page, old URLs still resolve.  |
| The owner can maintain it                    | Simple Astro and Tailwind that matches the surrounding code; `CLAUDE.md` kept current.   |
| Honest reporting                             | What changed, what was checked and how, what was not checked, anything you were unsure of. |

## Non-negotiables (never cut, never deferred)

1. **The owner's words.** Content (project cards, intro, posts, testimonials) is pasted exactly as given. Placeholder text is labelled as placeholder in your report.
2. **A passing build and a real look.** Every change builds, and every visual change is seen in a browser at desktop and phone width before you call it done.
3. **No lost work.** The human edits files between turns. Check `git status` / `git diff` before writing and build on what is there.

**Negotiable:** animation polish, extra pages, nice-to-have refactors. Cut them first.

---

## 0. Project config (nothing here is secret)

| Key                | Value                                                                    |
| ------------------ | ------------------------------------------------------------------------ |
| GH_REPO            | `ptums/personal-site`                                                    |
| PRODUCTION_BRANCH  | `main2` (there is no `main`)                                             |
| LIVE_URL           | https://tumulty.me (www.tumulty.me, ptums.me and www.ptums.me redirect here) |
| HOSTING            | Vercel, GitHub integration; every push builds, `main2` deploys to production |
| PREVIEW_URL        | `https://personal-site-git-<branch>-peter-ts-projects-33da9322.vercel.app` (behind Vercel login) |
| INSTALL            | `npm install` (from `vercel.json`)                                       |
| CONTENT            | `src/content/words/` (Obsidian vault), `db/*.json`, `PROJECTS` in `src/pages/index.astro` |

## 1. Inputs

- `CLAUDE.md`: stack, routing, content schema, rules.
- `SELF_IMPROVEMENT.md`: lessons log (read it; append to it).
- The human's message. Pasted content is the source of truth for copy. If a paste arrives empty or as a placeholder, ask for it again; don't guess.
- `wireframe.png` (untracked, never committed): the original layout reference.

## 2. Operating rules

**Autonomous (no asking):** reading files, creating branches, editing source inside the agreed scope, running `npm run build` / `npm run dev` / `npx astro preview`, browser checks, `git` and `gh` reads, checking Vercel deploy status.
**Always ask first (a gate):** committing and pushing (wait for "commit; push"), pushing to `main2`, adding a dependency, deleting files you didn't create, changing `vercel.json`, DNS, or anything that costs money.
**Never:** rewrite the owner's wording; commit `wireframe.png`, `.astro/settings.json`, or `public/.DS_Store`; read or print `.env` or tokens; force-push; overwrite uncommitted human edits; touch GitHub Actions or LinkedIn/Substack automation unless that is the task.
**Honesty about verification.** Never write "verified", "tested", or "works" unless you ran the check in this session and can show the output. Always say what you did NOT check.

**Asking well.** One message per gate: what was done (3-6 lines), what you need decided, your recommendation. Batch questions. Don't ask what `CLAUDE.md` already answers.

## 3. Phases

### Preflight (auto)

1. `git status` and `git branch --show-current`. Note uncommitted human edits; they stay.
2. If the change is more than a copy tweak, work on a branch (ask for its name if the human gave one; otherwise `<topic>` kebab case).
3. Confirm every input the request names actually exists (files, slugs, links). Missing inputs are reported, not invented.

### Scope (G0, only when needed)

Skip this gate for clear, small requests. Stop here when the request is ambiguous, touches production config, or needs a new dependency: state the plan in a few lines, the dependency and why, and your recommendation.

### Build (auto)

- Match the surrounding code: Astro components, Tailwind classes, existing spacing and colour tokens (emerald text, stone borders, `fade-in-up`).
- Frontmatter cannot contain JSX; return data and render it in the template.
- Data-driven content stays data: project cards in `PROJECTS`, testimonials in `db/testimonials.json`, posts in `src/content/words/`.
- For multi-step tasks, one commit per step, and `npm run build` after each step.

### Verify (auto)

1. `npm run build`: zero errors; read warnings.
2. Browser check with Playwright against `npx astro preview --port 4399` (or the dev server): screenshot each changed page at 1440px and 390px wide and look at them. Measure alignment with `getBoundingClientRect` when the request is about alignment.
3. Behaviour checks for what changed, for example: nav links per page, redirects resolve, drafts produce no page, cards fade in only when visible, bold renders as `<strong>`.
4. Diff check: `git diff --stat` shows only files in scope; human edits are intact.

### Commit (G1)

Report the change and wait for "commit; push". Then: rebuild, `git add` the source plus `dist/`, commit with a message that says what and why, push the branch.

### Preview (auto)

Watch the Vercel status: `gh api repos/ptums/personal-site/commits/<sha>/statuses --jq '.[0].state'`. Report the preview URL and its state. On failure, read the build log, fix, and log the cause in `SELF_IMPROVEMENT.md`.

### Ship (G2)

Only when the human says to put it live: fast-forward `main2` (`git push origin <branch>:main2`; if it isn't a fast-forward, stop and ask). Wait for the production deployment, then `curl -sL` the live URL and confirm the new content is there.

## 4. Failure handling

- Build fails: fix the cause; never commit a broken build.
- Unexpected changes in the working tree that you didn't make: assume they're the human's. Keep them, and ask before including them in a commit.
- A lockfile rewrite much larger than the change: revert it and find out why before continuing.
- A check you can't run (no browser, deploy behind login): say so plainly in the report.

## 5. Report format (end of every task)

- What changed, in plain language, with the commit hash if committed.
- How it was checked (commands, screenshots, measurements) and what was not checked.
- Anything you were unsure about, and open items (typos, placeholder text, missing links).

## 6. Definition of done

Build passes; changed pages checked in a browser; owner's copy verbatim; `dist/` committed with the source; `CLAUDE.md` updated if routing, content schema, or navigation changed; preview (or production, if shipped) deployment is green and checked; `SELF_IMPROVEMENT.md` updated for any real process problem.
