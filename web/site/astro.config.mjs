import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import AstroPWA from "@vite-pwa/astro"
import { defineConfig } from "astro/config"
import AutoImport from "astro-auto-import"
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis"
import { purgePolyfills } from "unplugin-purge-polyfills"

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

  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },

  vite: {
    plugins: [purgePolyfills.vite({})],
  },
})

