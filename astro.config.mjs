import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// Tables in posts scroll sideways on small screens, so make them keyboard-focusable
// (Astro already does this for code blocks). Runs on the Markdown HTML at build time.
function focusableTables() {
  const visit = (node) => {
    if (node.type === "element" && node.tagName === "table") {
      node.properties = { ...node.properties, tabIndex: 0 };
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
}

export default defineConfig({
  // Used for absolute links in the RSS feed
  site: "https://tumulty.me",
  markdown: {
    rehypePlugins: [focusableTables],
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
