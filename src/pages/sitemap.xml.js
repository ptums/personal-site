import { getCollection } from "astro:content";
import { CASE_STUDIES } from "../data/case-studies";
import { SITE_URL } from "../data/site";

// Every indexable page, at its canonical URL (no trailing slash). Posts include their date.
export async function GET() {
  const posts = await getCollection("words", ({ data }) => data.published);
  const pages = [
    { path: "/" },
    { path: "/work-with-me" },
    ...CASE_STUDIES.map((study) => ({ path: `/work/${study.slug}` })),
    { path: "/testimonials" },
    { path: "/words" },
    ...posts.map((post) => ({
      path: `/words/${post.slug}`,
      lastmod: post.data.date.toISOString().slice(0, 10),
    })),
  ];

  const urls = pages
    .map(({ path, lastmod }) => {
      // Same form as the canonical tags: "https://tumulty.me/" for home, no trailing slash elsewhere
      const loc = new URL(path, SITE_URL).href;
      return `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
