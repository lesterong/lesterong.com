// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Figtree',
        cssVariable: '--font-figtree',
        weights: ['100 900'],
      },
      {
        provider: fontProviders.fontsource(),
        name: 'JetBrains Mono',
        cssVariable: '--font-jetbrains-mono',
        weights: ['100 900'],
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Playfair Display',
        cssVariable: '--font-playfair-display',
        weights: ['100 900'],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
