# Analytics (PostHog)

PostHog is behind a feature flag. It is on (TWS-71).

## How it works

- `ENABLE_POSTHOG` in `src/data/site.ts` controls it. When it is `false`, no page renders the PostHog component, and the PostHog library (about 310 KB) is never downloaded.
- `src/components/PostHog.astro` holds the setup. Astro adds its small loader script (about 1.5 KB) to every page. The loader downloads the library with a dynamic import only when the flag is on and a key is set.
- Settings match `/privacy`:
  - The privacy options are the same as the parks finder (`local-parks-candidate-project/web/src/analytics.ts`), except for cookieless mode.
  - `cookieless_mode: "always"`: no cookies and no browser storage. PostHog makes the visitor ID on its servers from a hash with a daily salt, so a visit can be followed from page to page within one day, and unique visitors per day are counted. The same person counts as a new visitor the next day. PostHog is the only analytics source; Vercel Speed Insights stays for performance.
  - `person_profiles: "never"`: no person profiles. `respect_dnt: true`: no events when Do Not Track is on.
  - Page views are on. Autocapture records only clicks on links and buttons.
  - Session recording, heatmaps, surveys, feature flags and other remote-config features are off. `disable_external_dependency_loading` stops PostHog from loading extra scripts.
  - `before_send` removes `$ip` from each event. PostHog can still add the IP on its servers, so "Discard client IP data" must be on in the project.
  - History: on 2026-10-14 events did not show at first. The cause was the missing authorized domain (launch step 4). The site used `persistence: "memory"` for a short time (PR #27), but that cannot count unique visitors, so it went back to cookieless mode.
  - Named events: `booking_link_clicked` (any `cal.com` link), `email_link_clicked` (the email link), and `results_viewed` (the Results block on `/work-with-me` is half in view, once per page load). All send the page path. To track another block, add `data-track-view="<name>"`; the event is `<name>_viewed`.
  - UTM tags (for example `utm_source=one-pager` on the QR code) need no code. PostHog reads them from the page URL.

## Goals (Oct 19 to Nov 2, TWS-71)

- **10 unique visitors from outside my own network.** PostHog Web analytics, with "Filter out internal and test users" on. Cookieless mode counts unique visitors per day.
- **1 real inquiry** on the Work with me page. A real inquiry has all three:
  1. **A real person:** a name and an email address that works.
  2. **At a real company:** a business that I can find (a website or a LinkedIn page).
  3. **With a real problem:** the Cal.com screening answers describe a specific problem, in their own words.

  Spam, sales pitches and recruiters do not count.

**The numbers are a minimum.** Brave and ad blockers block PostHog, so those visitors are not counted. My own visits come from Brave, so they are not counted either (checked 2026-10-15: 0 events in the last hour after I clicked around the site in Brave).

The baseline for Oct 14 to Oct 18 goes in TWS-88.

## To launch

1. In PostHog, go to Project Settings > Web analytics and turn on **Cookieless server hash mode**. Cookieless mode does not work without it. (On since 2026-10-14.)
2. In PostHog project settings, turn on GeoIP (city and country) and the setting that **discards the client IP**. The privacy note says the IP is not stored.
3. In Vercel (Project > Settings > Environment Variables, Production), set:
   - `PUBLIC_POSTHOG_KEY`: the project API key (starts with `phc_`; it is public by design).
   - `PUBLIC_POSTHOG_HOST`: only for an EU project. The default is `https://us.i.posthog.com`.
4. Set `ENABLE_POSTHOG = true`, commit, and deploy.
   - In PostHog, add `https://tumulty.me` to the project's authorized domains (Web analytics). Without it, events arrive (status 200) but do not show in the dashboard. This was the real cause on 2026-10-14.
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
