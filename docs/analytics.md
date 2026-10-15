# Analytics (PostHog)

PostHog is behind a feature flag. It is on (TWS-71).

## How it works

- `ENABLE_POSTHOG` in `src/data/site.ts` controls it. When it is `false`, no page renders the PostHog component, and the PostHog library (about 310 KB) is never downloaded.
- `src/components/PostHog.astro` holds the setup. Astro adds its small loader script (about 1.5 KB) to every page. The loader downloads the library with a dynamic import only when the flag is on and a key is set.
- Settings match `/privacy`:
  - The setup is the same as the parks finder (`local-parks-candidate-project/web/src/analytics.ts`).
  - `persistence: "memory"`: no cookies and no browser storage. The anonymous ID lives only in memory, so each page load gets a new ID. Pages cannot be linked into one visit, and unique visitors are overcounted.
  - `person_profiles: "never"`: no person profiles. `respect_dnt: true`: no events when Do Not Track is on.
  - Page views are on. Autocapture records only clicks on links and buttons.
  - Session recording, heatmaps, surveys, feature flags and other remote-config features are off. `disable_external_dependency_loading` stops PostHog from loading extra scripts.
  - `before_send` removes `$ip` from each event. PostHog can still add the IP on its servers, so "Discard client IP data" must be on in the project.
  - Why not `cookieless_mode: "always"` (the first setup): PostHog accepted those events (status 200) but did not show them. Cookieless mode also needs "Cookieless server hash mode" in the project settings.
  - Named events: `booking_link_clicked` (any `cal.com` link) and `email_link_clicked` (the email link). Both send the page path.

## To launch

1. (Not needed with `persistence: "memory"`.) Cookieless server hash mode is needed only if the site goes back to `cookieless_mode`.
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
| Flag on, real key, cookieless mode (2026-10-14) | Yes | Config, then one event per page (`POST /e/`, status 200). Events did not show in PostHog | None | None |
| Flag on, real key, memory persistence (2026-10-14) | Yes | One event per page (`POST /e/`, status 200). No `config.js` request. Normal anonymous ID, no `$ip`, no `$cookieless_mode` | None | None |

PostHog drops events from automated browsers (`navigator.webdriver` is true in Playwright). To test with Playwright, hide that flag with an init script. Otherwise the page loads PostHog but sends no events.

Not tested yet: the events in PostHog's live events view, and the production site after deploy (step 5).
