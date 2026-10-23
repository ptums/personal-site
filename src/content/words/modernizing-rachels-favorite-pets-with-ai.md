---
title: "Modernizing Rachel's Favorite Pets with AI"
date: "2026-10-14"
tagLine: "My skills transferred. The checking stayed my job."
summary: "What I learned moving a legacy pet gallery app to Angular, TypeScript and AWS with AI as a working partner, and the key insights in plain English."
published: true
---

Revisiting an app you wrote eleven years ago can be quite surprising. For any graybeards, I highly recommend you do this. Go deep into your GitHub repository list and find some code that hasn't seen the light of day in years. Also, if you have a technical college degree go look at some code you wrote in a class. I bet when you take that first look you notice the same thing I did when I looked at my ole' app. The first thing I noticed was how simple it was. The app was a simple CRUD application that had a login and a file uploader. It's called "Rachel's Favorite Pets", inspired by my now wife. The second I noticed was how easy it was to read the code. There was no error handling and there were no analytics configs. It was straightforward: route path, callback, and a few lines to save in a database. Oh, and there wasn’t any ORM - only raw SQL and a hardcoded session secret.

However, there was one major problem. The app's dependencies were so outdated there was no way it could run locally. So I couldn't marvel at my beautiful Bootstrap UI. So the path was clear: get it updated. With the help of Claude, I used this beautiful non-functioning app as a platform to learn. Just like its original purpose. Back then, it was fullstack JavaScript, now TypeScript/AWS, running on local emulators. It's no secret the face of web technologies changed in that decade + 1, but it's nice to revisit the past and see how it can be refitted for the present.

Here are some key insights I've learned from this experience:

- DynamoDB Local works with dynamodb-admin, a local data browser. It's a nice feature to see and manage your data.
- You can make your own learning plan with Claude. I already knew Docker, Angular and TypeScript, so I did not want to learn them again. Claude wrote a prompt to build those parts. Then Claude gave me lessons and practice questions. I learned the AWS services that run on my computer.
- The result was good. Claude moved all the styles and the UI structure from the old Angular 1 and Bootstrap code. The new app looks like the app I designed many years ago.

## Related

- [Results: Rachel's Favorite Pets](/work/rachels-favorite-pets/results)
- [Baseline: Rachel's Favorite Pets](/work/rachels-favorite-pets/baseline)
- [The project on the home page](/#projects-heading)
- [Source code on GitHub](https://github.com/ptums/rachels-favorite-pets)
- [Rebuilding a Shopify Bulk Order Update Tool the Right Way](/words/rebuilding-a-shopify-bulk-order-update-tool)
