import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("words", ({ data }) => data.published);
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Words | Peter Tumulty",
    description: "Writing on software engineering, AI enablement, and modernization.",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/words/${post.slug}/`,
    })),
  });
}
