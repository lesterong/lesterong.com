// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Figtree",
        cssVariable: "--font-figtree",
        weights: ["100 900"],
      },
    ],
  },
});
