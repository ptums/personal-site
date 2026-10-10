import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tagLine: z.string(),
    description: z.string(),
  }),
});

const words = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tagLine: z.string().optional(),
    published: z.boolean().default(true),
    linkedin_url: z.string().url().optional(),
  }),
});

export const collections = { blog, words };
