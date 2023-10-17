import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), mdx()],
  buildOptions: {
    site: "https://dermapenmax.com",
    // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  // GitLab Pages requires exposed files to be located in a folder called "public".
  // So we're instructing Astro to put the static build output in a folder of that name.
  outDir: "public",

  // The folder name Astro uses for static files (`public`) is already reserved
  // for the build output. So in deviation from the defaults we're using a folder
  // called `static` instead.
  publicDir: "static",
});
