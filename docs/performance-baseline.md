# Performance baseline (before PostHog)

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

## After PostHog

Run the same command on the same pages after PostHog is live, and add a second table here. Look first at TBT and LCP: a tracking script usually changes those two numbers.
