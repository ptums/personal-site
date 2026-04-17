# Personal Site

My personal site and blog, built with Astro.

## Stack

- [Astro 4](https://astro.build) — static site generator
- React — used for two interactive islands (animated intro, mobile nav)
- Tailwind CSS
- Framer Motion
- Markdown files for blog posts

## Blog

Posts live in `src/content/blog/` as plain `.md` files. Each filename becomes the URL slug at `/blog/post/[slug]`.

Required frontmatter:

```md
---
title: "Post Title"
date: "YYYY-MM-DD"
tagLine: "Short hook line"
description: "One sentence description."
---
```
