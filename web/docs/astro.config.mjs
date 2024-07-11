import starlight from "@astrojs/starlight"
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

    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              slug: "guides/example",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),

    tailwind({
      applyBaseStyles: false,
    }),

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

