# SELF_IMPROVEMENT.md

A running log of what went wrong or right while working on this site with an AI agent, and the concrete change that follows.

## Rules

- Append only. Newest at the bottom of the Log.
- Every entry ends with an **ACTION** that changes a file (`CLAUDE.md`, `PROCESS.md`, a component, a script). "Be more careful" is not an action.
- Read this file before starting any task from `PROCESS.md`; append when something goes wrong or a check catches a real problem.
- Never log secrets.

## Entry format

```
### [YYYY-MM-DD] <phase> / <who>
OBSERVED: what happened (link the commit)
CAUSE: best guess at why
ACTION: exact change (file + what)
STATUS: proposed | applied (commit) | rejected (why)
```

## Seeded lessons (from the redesign and /words work, October 2026; the actions are already in the docs)

1. **An animation that ran where nobody could see it.** Project cards were unhidden in batches below the fold, so the fade-in finished off screen and the human saw no effect. ACTION (applied): a separate IntersectionObserver fades each card in only when it is visible; PROCESS.md Verify requires a browser check of behaviour, not just a build.
2. **JSX in Astro frontmatter broke the build.** A helper that returned `<strong>` elements from the frontmatter failed in Vite. ACTION (applied): helpers return plain data (`boldParts` returns strings) and the template renders the markup; PROCESS.md Build notes the rule.
3. **The human edits copy between turns.** A fix for bold text targeted the old card shape because the human had switched the card to a plain paragraph by hand. ACTION (applied): CLAUDE.md and PROCESS.md Preflight require `git status` / `git diff` before editing.
4. **Prettier added whitespace inside links.** Multi-line formatting put a trailing space inside `<a>`, so the underline ran past the text. ACTION (applied): write link text inline (`>{link.label}</a>`).
5. **Typos went live verbatim.** The law firm card shipped with "abd" and "a CRM integrations" because copy is never rewritten. That was the right rule, but the typos were only mentioned after the commit. ACTION (applied): PROCESS.md says to flag typos in the report before "commit; push".
6. **"Home" looked active on every page.** `pathname.startsWith("/")` is always true. A screenshot caught it, not the build. ACTION (applied): `Nav.astro` excludes `/` from the active check, and later lists every page except the current one.
7. **"Push to main" when there is no `main`.** The production branch is `main2`. ACTION (applied): PROCESS.md section 0 names it; CLAUDE.md says pushing to it deploys the live site.
8. **A second package manager rewrote the lockfile.** Running Yarn to update `yarn.lock` rewrote about 1,000 lines, because that file was stale. npm already keeps `yarn.lock` in sync, and Vercel installs with npm. ACTION (applied): CLAUDE.md says to install with npm only; PROCESS.md failure handling says to revert a lockfile rewrite much larger than the change.
9. **A named input didn't exist.** The /words task referenced `src/content/words/hello-world.md`, but the folder was empty, so the draft filter had nothing to test. ACTION (applied): PROCESS.md Preflight checks that named inputs exist; the draft filter was tested with a temporary `published: false` post that was deleted afterwards.
10. **Static redirects are not 301s.** Astro's `redirects` without an adapter write meta-refresh HTML pages. They work for visitors and set a canonical link, but don't send a real 301. ACTION (proposed): if search ranking for old `/blog` URLs matters, move the redirects into `vercel.json`.
11. **A paste arrived as a placeholder.** One message contained only `[Pasted text #3 +4 lines]`. ACTION (applied): PROCESS.md Inputs says to ask for an empty paste again instead of guessing.
12. **"Fix the order" when the order was already right.** Testimonials were already sorted by `order`; the human expected the file order. Checking the rendered page before changing code avoided a wrong fix. ACTION (applied): PROCESS.md Verify includes behaviour checks against the built output.
13. **Browser-check scripts were lost between sessions.** The Playwright scripts lived in a temporary scratchpad and were gone after the context was compacted. Playwright also needed an explicit `executablePath` to the installed headless shell. ACTION (proposed): keep a small screenshot script in the repo (for example `scripts/shot.mjs`) or document the exact command in PROCESS.md Verify.

## Log

(Entries go below.)
