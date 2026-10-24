---
title: "Rebuilding a Shopify Bulk Order Update Tool the Right Way"
date: "2026-10-22"
tagLine: "My first pass was less wrong. The rebuild works with the API."
summary: "How I rebuilt a 2021 Shopify bulk order update tool in TypeScript: edit sessions, rate limits and queues took it from 89 minutes to 12.5 seconds."
published: true
---

## The first pass: one problem at a time

I had been an independent contractor and software consultant for less than 3 months. Shocker, I was already working on small business Shopify stores. This project is the first real work I did within this environment, and it was one of the most challenging. I was new to Shopify, and not the strongest backend automation engineer. At that time, I'd consider myself a yellow belt. I had written several microservices that are still running today. I worked heavily in PHP/WordPress writing plugins and API endpoints. Most notably, I was an instructor at a full-stack bootcamp that covered Node.js. I knew enough about databases, ORMs, routes and authentication. I wasn't a dangerous backend developer, but I was confident enough to pick up work in this area. So I welcomed the work. And boy, did this work show how green I was.

The challenge using Shopify API is it's **designed to protect again updating orders in bulk.** They have a good enough solution now for bulk updating. But at the time, I was new to Shopify, and their GraphQL API was still pretty new too. What Shopify did to mitigate bulk updating was **break an update into 3 calls.** First was the call to say I want to make a change to this order. Second, send the updated quantity. Third, commit the update. My strategy was to tackle one piece at a time, as many young engineers do. You didn't design a solution. You walked through each challenge to get something working. The process was ugly and so was the code. When I shared it with the client, they found the gaps fast: timeouts, and some order updates that never went through. I owned it and went back to work.

I spent hours trying to figure out how to design a better solution. But the more I read, the more I was confused. I reached out on forums and heard nothing but radio silence. So my only option was to walk through the app again. I would make modifications to optimize and try to make the output less wrong. This time I tried to break the rows into chunks. One order would have several lines of items, so I tried to chunk the rows into groups of 20. That seemed to help a little bit. _Don't ask me why,_ but I got fewer errors and fewer timeouts. I tried to optimize my timeouts to work around the rate limiting issues the API would give me when I pinged it too much. It slowed things down, but the output was less wrong. I also tried to utilize promises in key places to make the pass between calls asynchronous. And it seemed to me that the combination of these three strategies worked. I'm not sure they were right, but they made the output less wrong. So on the second pass, the client was **satisfied.** They were able to bulk update their orders and of course there a few that would slip through the cracks, but they didn't mind manually updating the left overs.

## Rebuilding it the right way

It's been some time since that experience, and it was interesting to revisit. Claude, my teacher and programming guru, taught me that what I did was **the wrong approach.** Claude taught me to interact with the API request response and **design a solution that fits with the response.** Like a handshake, it should work together. My original solution was to back off when it complained. I didn't want to work with the response and use it to make my program more efficent. This time around, I addressed its responses with a decision. If the API throttled me, I would wait exactly as long as it needed. If there was a connection issue, we set it up where we never lost track of the outstanding work. It felt like our system was designed to converse with the Shopify API rather than try to cheat it.

Another key thing I learned is that the strategy the Shopify API design is similar to **how git works.** You have a clean branch, you make changes and add them, then you commit the changes, and then you push the changes. Once I understood that, a lot of the pieces fell into place. Each one of these steps no longer seemed defensive, but sophisticated and intentional. The engineers who designed this API clearly knew system design concepts like the Unit of Work pattern. You collect all your changes first, then save them in one go. And they protected the store's data the way a database protects a transaction. The commit is all or nothing, so an order is never left half edited. Back in 2021, I saw it as three hoops to jump through. Now I see a design that was trying to keep my updates safe, and I was the one working against it.

## Key takeaways

Here are some more big takeaways from the experience:

- An order update is broken into three different calls because it aligns with the idea of **atomicity.** 40 line changes become one change to the order, and a failure in the middle leaves the order as it was and not half edited.
- The API has a **leaky bucket** design, which means we can't simply continuously call it till the job is done. Our solution was to read the bucket status in each response. Then we wait only as long as the next call needs: the points it costs minus the points left, divided by the refill rate of 50 points a second.
- Using NATS and a queue took the code out of the "solve one problem at a time" phase and gave it **an intentional design.** It organized the updates into a process that could be managed. Failures and successes could be communicated. The solution now responds to what the API gives. If there is pushback, it waits just long enough and tries again. If an order fails, it goes back on the queue. If the system crashes, \*\*it picks up where it left off.

_The more I reflect on this idea, the more I see programming with a new perspective._

## Related

- [The project on the home page](/#projects-heading)
- [Adding GraphQL to Your Skill List](/words/adding-graphql-to-your-skill-list)
- [Modernizing Rachel's Favorite Pets with AI](/words/modernizing-rachels-favorite-pets-with-ai)
- [Baseline: Bulk Order Update Tool](/work/bulk-order-update-tool/baseline)
- [Results: Bulk Order Update Tool](/work/bulk-order-update-tool/results)
- [Source code on GitHub](https://github.com/ptums/reconcile-toy-order-fill-rate)
