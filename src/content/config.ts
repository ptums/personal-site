import { defineCollection, z } from "astro:content";

const words = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tagLine: z.string().optional(),
    // Optional shorter versions for the <title> (under 60 chars) and meta description (under 155)
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    published: z.boolean().default(true),
    linkedin_url: z.string().url().optional(),
  }),
});

// Baseline and results docs for the project cards, copied from each project's repo.
// The slug is "<project>/<doc>", served at /work/<project>/<doc>.
const proof = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { words, proof };
