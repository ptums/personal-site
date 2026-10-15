---
title: "Modernizing Rachel's Favorite Pets with AI"
date: "2026-10-14"
tagLine: "My skills transferred. The checking stayed my job."
summary: "What I learned moving a legacy pet gallery app to Angular, ASP.NET Core and Azure Cosmos DB with AI as a working partner, and the key insights in plain English."
published: true
---

<!-- DRAFT (TWS-53). Peter's first draft, with typo and fact fixes applied. -->

Revisiting this app after eleven years was quite a surprise. For any older devs out there, I highly recommend you practice this if you have any dusty apps deep in your github repo. The first thing I noticed was its simple design. There was no error handling and there were no analytics configs. It was straightforward: route path, callback, and a few lines to save in a database. Oh, and there wasn't any ORM - just raw SQL and a hardcoded session secret. Looking at this was quite refreshing because I understood what this app did instantly.

However, there was one major problem. The app's dependencies were so outdated there was no way it could run locally. So I couldn't marvel at my beautiful Bootstrap UI. So the path was clear: get it updated. With the help of Claude, I used this beautiful non-functioning app as a platform to learn a new stack. Just like its original purpose. Back then, it was fullstack JavaScript, now C#/.NET and Azure, running on local emulators. It's no secret the face of web technologies changed in that decade + 1, but it's nice to revisit the past and see how it can be refitted for the present.

Here are some key insights I've learned from this experience:

- I used PHP in Laravel for many years. But C# in .NET might have the better syntax.
- The Cosmos DB emulator has a local Data Explorer. It's a nice feature to see and manage your data.
- With Options, you decide how the program must operate. Then the program operates that way each time. It is like you give the program a personality.
- You can make your own learning plan with Claude. I already knew Docker and Angular, so I did not want to learn them again. Claude wrote a prompt to build those parts. Then Claude gave me lessons and practice questions. I learned C#, .NET and the Azure services that run on my computer.
- The result was good. Claude moved all the styles and the UI structure from the old Angular 1 and Bootstrap code. The new app looks like the app I designed many years ago.

## Related

- [Results: Rachel's Favorite Pets](/work/rachels-favorite-pets/results)
- [Baseline: Rachel's Favorite Pets](/work/rachels-favorite-pets/baseline)
- [The project on the home page](/#projects-heading)
- [Source code on GitHub](https://github.com/ptums/rachels-favorite-pets)
