import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://danny270793.github.io",
  build: {
    assets: "astro"
  },
  integrations: [preact(), tailwind()]
});