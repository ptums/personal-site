import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Used for absolute links in the RSS feed
  site: "https://tumulty.me",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
