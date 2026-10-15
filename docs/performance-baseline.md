# Performance baseline (before and after PostHog)

Recorded on 2026-10-14 for TWS-72. Use these numbers to measure the cost of the PostHog script (TWS-71).

## Method

- Tool: Lighthouse 13.5.0 CLI, mobile (the default emulated mobile device and throttling).
- Chrome flags: `--headless=new --incognito`, so no extensions and no signed-in state.
- Target: the live production site, https://tumulty.me, at commit `bb7fd08` (`main2`).
- Runs: 3 for each page. The table shows the median.
- Scripts on the page at this time: Vercel Web Analytics and Speed Insights. PostHog is not installed.

Command for one run:

```
npx lighthouse https://tumulty.me/ --output=json --output-path=home-1.json --chrome-flags="--headless=new --incognito"
```

## Results (median of 3 runs)

| Page | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 0.80 s | 1.23 s | 0 ms | 0.000 | 1.09 s |
| `/work-with-me` | 100 | 100 | 100 | 100 | 0.79 s | 1.08 s | 0 ms | 0.016 | 0.79 s |
| `/work/law-firm-headless-migration` | 100 | 100 | 100 | 100 | 0.79 s | 1.07 s | 0 ms | 0.010 | 0.79 s |

All three pages scored 100 for performance in all 3 runs.

## After PostHog (median of 3 runs)

Recorded on 2026-10-14, same method, at commit `626fe45` (`main2`). PostHog is on, with `persistence: "memory"` (PR #27).

| Page | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 0.80 s | 1.22 s | 8 ms | 0.000 | 1.11 s |
| `/work-with-me` | 100 | 100 | 100 | 100 | 0.80 s | 1.08 s | 8 ms | 0.001 | 0.88 s |
| `/work/law-firm-headless-migration` | 100 | 100 | 100 | 100 | 0.79 s | 1.08 s | 6 ms | 0.010 | 1.03 s |

- Performance was 100 in 8 of 9 runs. One home page run scored 98.
- The PostHog library adds one request of about 102 KB (transferred), loaded after the page with a dynamic import.
- TBT went from 0 ms to 6 to 8 ms. FCP and LCP did not change.
- Limit: Lighthouse's browser counts as a bot to PostHog, so no event was sent during these runs. The library download and setup are measured. The event request is not, but it is small and sent after the page loads.
