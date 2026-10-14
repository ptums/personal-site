---
title: "Modernizing Rachel's Favorite Pets with AI"
date: "2026-10-14"
tagLine: "My skills transferred. The checking stayed my job."
summary: "What I learned moving a legacy pet gallery app to Angular, ASP.NET Core and Azure Cosmos DB with AI as a working partner, and the key insights in plain English."
published: false
---

<!-- DRAFT (TWS-53). Sample written by Claude from LEARNINGS.md and the results doc. Peter: rewrite the first part in your own voice. Every fact below is from the source docs; nothing new was added. -->

AI made working in an unfamiliar stack cheap to start, and it moved my time from typing code to deciding, checking and documenting. I learned that by migrating Rachel's Favorite Pets, a legacy app, to Angular, ASP.NET Core, Azure Cosmos DB and Azure Blob Storage, all running on local emulators, with Claude as a working partner.

The C# side was new to me: ASP.NET Core minimal APIs, EF Core with the Cosmos provider, NuGet and the dotnet tooling. So was running Cosmos DB locally in Docker. What surprised me was how little of the underlying work was new. I already knew what a protected route should do, how cookie auth works, and how a blob upload should behave. AI removed most of the ramp-up cost, so I could spend my time on decisions instead of documentation detours.

The decisions stayed mine. I used AI to compare stack options, then made the call and wrote it down. I set the scope on purpose: emulators only, no CI/CD, no automated tests, and I recorded that in the README so it reads as a decision, not an omission.

The part I'll remember most is how often a plausible answer was wrong for my setup. My first Lighthouse run measured the dev server. My second measured a static server that returned HTML where the app expected JSON. A suggested Data Explorer URL pointed at the wrong port. Each time, the catch came from checking the real environment, not from trusting the answer.

Once the setup was right, serving the build from the API with compression moved Performance from 70 to 85 and SEO from 91 to 100.

## Key insights

1. **Concepts transfer to a new stack.** I knew routes, auth and file uploads. AI helped me write them in C#. Only the syntax and the tools were new.
2. **AI gives options. I make the decision.** I compared stack choices with AI, then I chose and wrote the reason in `STACK.md`.
3. **Write down what you leave out.** I recorded "no CI/CD, no automated tests" in the README. A reader sees a decision, not a gap.
4. **Check the setup before you measure.** Two of my first measurements were not valid. Checking that the page loads real data and the API returns JSON would have saved two rounds.
5. **Check AI answers against the real environment.** Ports, container names and versions are easy to get wrong in a plausible answer.
6. **Compression did most of the speed work.** It moved Performance from 70 to 85, more than the hosting change did.

**Simple example (high school level).** You ask a friend for directions to a new store. The directions sound right. Before you drive, you check them on a map, because "sounds right" and "is right" are not the same. AI is the friend. The map is your real setup.

## Related

- [Results: Rachel's Favorite Pets](/work/rachels-favorite-pets/results)
- [Baseline: Rachel's Favorite Pets](/work/rachels-favorite-pets/baseline)
- [The project on the home page](/#projects-heading)
- [Source code on GitHub](https://github.com/ptums/rachels-favorite-pets)
