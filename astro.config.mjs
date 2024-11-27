// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://adventnicesta.cz/",
  integrations: [
    tailwind(),
    sitemap(),
    AstroPWA({
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
});
