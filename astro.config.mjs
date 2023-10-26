import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), mdx(), sitemap()],
  site: "https://www.dermapenmax.com",

  image: {
    service: squooshImageService(),

    domains: ["astro.build", "dermapenmax.com", "cdn-icons-png.flaticon.com"],
  },
});
