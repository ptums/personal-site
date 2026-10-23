---
title: "Rebuilding a Shopify Bulk Order Update Tool the Right Way"
date: "2026-10-22"
tagLine: "My first pass was less wrong. The rebuild works with the API."
summary: "How I rebuilt a 2021 Shopify bulk order update tool in TypeScript: edit sessions, rate limits and queues took it from 89 minutes to 12.5 seconds."
published: false
---

## The first pass: one problem at a time

I had been an independent contractor and software consultant for less than 3 months. _And shocker,_ I was already getting work from clients who needed help with their Shopify stores. This project is the first real work I did within this environment, and it was one of the most challenging. I was new to Shopify, not the strongest backend automation engineer. My experience thus far was wiring up serverless functions, some db interfacing with PHP in WordPress, and writing personal backend API apps in Node.js. That's not to say I didn't have the confidence I could pick up BE work. I knew enough about databases, ORMs, routes and authentication. All the stuff you typically learn in a full-stack bootcamp and then some. So I welcomed the work. And boy did this work show **just how green I really was.**

The challenge using Shopify Admin API is that it's **designed to protect developers from making bulk updates.** _They have a good enough solution now. It doesn't make sense they wouldn't have something like that._ But at the time, I was new to Shopify. The guy I was working with had said "I did the research. These are the docs to get it done." Essentially, what Shopify did to mitigate bulk updating was **break an update into 3 calls.** First was the call to say I want to make a change to this order. Second, send the updated quantity. Third, commit the update. My strategy was to tackle one piece at a time, _as many young engineers do._ You didn't design a solution. You walked through each challenge to get something working. The process was ugly and so was the code. Sometimes it didn't work. The first pass was janky and the guy I was working with wasn't too happy. But he thought it was good enough to share with the client. They complained about **timeout issues.** They also complained that **some of the order updates were missed.**

I spent hours trying to figure out how to design a better solution. But the more I read, the more I was confused. I reached out on forums and heard nothing but radio silence. So my only option was to walk through the app again. I would make modifications to optimize and try to make it less wrong. This time I tried to break the rows into chunks. One order would have several lines of items, so I tried to chunk the rows into groups of 20. That seemed to help a little bit. _Don't ask me why,_ but I got fewer errors and fewer timeouts. I tried to optimize my timeouts to work around the rate limiting issues the API would give me when I pinged it too much. It slowed things down, but again it was less wrong. I also tried to utilize promises in key places to make the pass between calls asynchronous. And it seemed to me that the combination of these three strategies worked. I'm not sure they were right, but they made the results less wrong. So on the second pass, the client was **satisfied, not happy, but satisfied.**

## Rebuilding it the right way

It's been some time since that experience, and it was interesting to revisit. Claude, my teacher and programming guru, taught me that what I did was **the wrong approach.** Claude taught me to interact with the API request response and **design a solution that fits with the response.** Like a handshake, it should work together. My solution was to back off when it complained. I didn't want to work with the Shopify API response. I just waited for it to stop complaining. Another key thing I learned is that the strategy the Shopify API design is similar to **how git works.** You have a clean branch, you make changes and add them, then you commit the changes, and then you push the changes. Once I understood that, a lot of the pieces fell into place. Finally, I was introduced to some new patterns like publish-subscribe that I've read about all over the internet. But this was the first time I got my hands on it. And the numbers tell the story. For the same 339 rows, my old version spent **about 89 minutes** just sitting in timeouts and made 1,356 API calls. The rebuild finishes in **12.5 seconds** with 114 calls, and if you run it again, it changes nothing.

## Key takeaways

Here are some big takeaways from the experience:

- An order update is broken into three different calls because it aligns with the idea of **atomicity.** 40 line changes become one change to the order, and a failure in the middle leaves the order as it was and not half edited.
- I've actually seen this sort of add change, commit change, save change a lot more without realizing it. When you design a solution with an ORM, you'll have code that represents what to change. More code takes the change code and makes the change. Then it finalizes the change by saving the change.
- The API has a **leaky bucket** design, which means we can't simply continuously call it till the job is done. Our solution was to read the bucket status in each response. Then we wait only as long as the next call needs: the points it costs minus the points left, divided by the refill rate of 50 points a second.
- Using NATS and a queue took the code out of the "solve one problem at a time" phase and gave it **an intentional design.** It organized the updates into a process that could be managed. Failures and successes could be communicated. The solution now responds to what the API gives. If there is pushback, it waits just long enough and tries again. If an order fails, it goes back on the queue. If the system crashes, **it picks up where it left off.** _The more I reflect on this idea, the more I see programming with a new perspective._

## Related

- [The project on the home page](/#projects-heading)
- [Adding GraphQL to Your Skill List](/words/adding-graphql-to-your-skill-list)
- [Modernizing Rachel's Favorite Pets with AI](/words/modernizing-rachels-favorite-pets-with-ai)
- [Baseline: the 2021 tool](https://github.com/ptums/reconcile-toy-order-fill-rate/blob/main/docs/BASELINE.md)
- [Results: the rebuild against the 2021 tool](https://github.com/ptums/reconcile-toy-order-fill-rate/blob/main/docs/RESULTS.md)
- [Source code on GitHub](https://github.com/ptums/reconcile-toy-order-fill-rate)
