# Analytics (PostHog)

PostHog is behind a feature flag. It is off until launch (TWS-71).

## How it works

- `ENABLE_POSTHOG` in `src/data/site.ts` controls it. When it is `false`, no page renders the PostHog component, and the PostHog library (about 310 KB) is never downloaded.
- `src/components/PostHog.astro` holds the setup. Astro adds its small loader script (about 1.5 KB) to every page. The loader downloads the library with a dynamic import only when the flag is on and a key is set.
- Settings match `/privacy`:
  - `cookieless_mode: "always"`: no cookies and no browser storage. PostHog makes the visitor ID on its servers from a hash with a daily salt, so a visit can be followed from page to page within one day. The same person counts as a new visitor the next day.
  - `person_profiles: "never"`: no person profiles.
  - Page views and autocapture (clicks) are on.
  - Named events: `booking_link_clicked` (any `cal.com` link) and `email_link_clicked` (the email link). Both send the page path.

## To launch

1. In PostHog, go to Project Settings > Web analytics and turn on **Cookieless server hash mode**. Cookieless mode does not work without it.
2. In PostHog project settings, turn on GeoIP (city and country) and the setting that **discards the client IP**. The privacy note says the IP is not stored.
3. In Vercel (Project > Settings > Environment Variables, Production), set:
   - `PUBLIC_POSTHOG_KEY`: the project API key (starts with `phc_`; it is public by design).
   - `PUBLIC_POSTHOG_HOST`: only for an EU project. The default is `https://us.i.posthog.com`.
4. Set `ENABLE_POSTHOG = true`, commit, and deploy.
5. Check: open the site, then confirm a page view in PostHog's live events, and confirm the browser has no PostHog cookie.
6. Re-run the Lighthouse baseline (`docs/performance-baseline.md`) and add the "after" table (TWS-72).

## Tested (2026-10-14, local build, Playwright)

| Case | Library downloaded | Requests to the analytics host | Cookies | Browser storage |
|---|---|---|---|---|
| Flag off | No | 0 | None | None |
| Flag on, test key | Yes | Config and flags requests | None | None |

Not tested yet: a real event arriving in PostHog. That needs the real key (step 5).
