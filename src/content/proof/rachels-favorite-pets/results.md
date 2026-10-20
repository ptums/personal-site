---
title: "Results: Rachel's Favorite Pets"
description: "Legacy app modernization results: Angular, Node.js/TypeScript and DynamoDB migration with Lighthouse performance 70 to 85, SEO 91 to 100 and CSS cut 79%."
---

# Results: Rachel's Favorite Pets (after migration)

Related: [Baseline: Rachel's Favorite Pets](/work/rachels-favorite-pets/baseline) · [All projects](/#projects-heading)

## Summary

AI made it cheap to rebuild an old app on a modern stack (a set of tools used to build an app). I spent less time typing code. I spent more time on decisions, checks, and documents.

I migrated Rachel's Favorite Pets from a legacy app to Angular, Node.js with TypeScript (Express 5), Amazon DynamoDB, and Amazon S3. Everything runs on local emulators (free copies of cloud services that run on my own computer). Claude was my working partner.

The migration is finished. The repo README documents it. I measured performance, accessibility, and SEO. I checked the delete route by hand.

## What I learned

The new material was running AWS's DynamoDB (a cloud database) and S3 on my own computer. The ideas underneath were not new.

- TypeScript backend: Express 5 with the AWS SDK for JavaScript v3. Node runs the .ts files directly with its type stripping, and tsc only type-checks. npm audit checks the dependencies.
- DynamoDB, simulated locally: I ran DynamoDB Local in Docker on port 8000, with dynamodb-admin on port 8002 to see and manage the data.
- S3 (a service that stores files such as images), simulated locally: S3Mock offers the S3 API on port 9090.
- Already known: routes, cookie auth, authorization rules, and file storage as a pattern. Those skills transferred directly. Only the syntax and tools were new.

## How AI changed the work

I already knew TypeScript, so my skills transferred directly. AI removed most of the cost of learning the AWS services. The decisions stayed mine.

- New services, familiar ideas. I knew what a protected route and a file upload should do. AI helped me write that in TypeScript against DynamoDB and S3. I did not need a long search through the documentation.
- Options, then my decision. I used AI to compare stack choices. Then I made the decision and recorded it myself (STACK.md). I did the same for the three auth modes (owner, open, accounts).
- A deliberate scope. I chose emulators only, no CI/CD, and no automated tests. I wrote this in the README. It reads as a decision, not a gap.
- Documents as a byproduct. The verification log, the Lighthouse record, and the README came from the same working session as the code.

## Where I stayed in the loop

AI output was wrong or incomplete several times. Each time, I found the fault by checking the real environment. I did not trust the answer.

| What went wrong | How I found it | Fix |
| --- | --- | --- |
| My first Lighthouse run used the Angular dev server (11.3 s FCP, 1.57 MB unminified bundle). FCP (First Contentful Paint) is the time until the first text or image shows. | The report still showed @vite/client and an unminified main file | Run again on a production build |
| My second run used a static server. It returned index.html for /config, /me, and robots.txt | The network table showed 200 text/html instead of JSON, and the console showed an error | Serve the build from the API |
| A delete route can return success and still leave a file behind | I checked the DynamoDB item and the S3 object separately | Confirmed that both were removed |

The pattern: AI is fast at giving a plausible answer. I had to make sure the answer was true for my setup.

## Results

Lighthouse is a Google tool that scores a web page. I served the build from the API and turned on response compression (sending smaller files). Performance went from 70 to 85. SEO went from 91 to 100. Compression, not the hosting change, did most of the speed work.

| Measure | Before (static server) | After (served from API) |
| --- | --- | --- |
| Performance | 70 | 85 |
| Accessibility | 100 | 100 |
| Best Practices | 96 | 96 |
| SEO | 91 | 100 |
| Total transfer | 828 KiB | 496 KiB |
| Main JS transferred | 280 KB | 112 KB |
| CSS transferred | 232 KB | 49 KB |
| FCP / LCP (simulated mobile) | 3.7 s / 5.9 s | 1.9 s / 4.1 s |

LCP (Largest Contentful Paint) is the time until the biggest item on the page shows.

The "before" column comes from a misconfigured setup with an empty gallery. It is a note on method, not a legacy baseline. The "after" result is one Lighthouse mobile run, signed in as owner.

- Dependencies: npm audit in api/ found 0 vulnerabilities on Oct 20 2026. This check is valid for that day only.
- Delete route: all six manual checks passed. They include S3 object removal, rejection of an unauthenticated request, and 404 for an ID that does not exist.

## What I'd do differently, and what's next

Next time, I would check the measurement setup before I measure anything. I would also record the legacy baseline in a form that I can compare.

- Check the test setup first. Two of my first measurements were not valid. I should check that the page loads real data and that API routes return JSON before I run Lighthouse. That would have saved two rounds.
- Check AI suggestions against the real environment. Container names, image versions, and ports are details where an answer can be wrong but still look right.
- Plan the baseline at the start. The legacy numbers were not directly comparable. This weakens the before/after story.

Open items are in the README backlog:

- eager-loading and fetchpriority on the first thumbnails
- WebP and right-sized banner images
- trimming unused CSS
- long cache lifetimes on hashed assets
- the fresh-clone setup measurement

I wrote about what I learned in [Modernizing Rachel's Favorite Pets with AI](/words/modernizing-rachels-favorite-pets-with-ai).
