import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // The blog moved to /words; keep old URLs working
  redirects: {
    "/blog": "/words",
    "/blog/post/a-light-introduction-to-web-components": "/words/a-light-introduction-to-web-components",
    "/blog/post/adding-graphql-to-your-skill-list": "/words/adding-graphql-to-your-skill-list",
    "/blog/post/avoiding-the-global-scope-with-the-revealing-module-pattern": "/words/avoiding-the-global-scope-with-the-revealing-module-pattern",
    "/blog/post/the-pieces-that-make-up-browser-caching": "/words/the-pieces-that-make-up-browser-caching",
    "/blog/post/the-power-of-the-map-method": "/words/the-power-of-the-map-method",
    "/blog/post/wrap-your-component-in-battle-armor-with-react-testing-library-and-typescript": "/words/wrap-your-component-in-battle-armor-with-react-testing-library-and-typescript",
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
