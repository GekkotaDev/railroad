import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import AstroPWA from "@vite-pwa/astro"
import AutoImport from "astro-auto-import"

import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"

// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [],
    }),

    mdx(),

    tailwind(),

    AstroPWA({
      workbox: {
        navigateFallback: "/404",
      },
    }),
  ],
})

