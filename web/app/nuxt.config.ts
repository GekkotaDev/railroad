import { fileURLToPath } from "node:url"

import { purgePolyfills } from "unplugin-purge-polyfills"

import Imports from "./.config/imports"
import locales from "./.config/locales"
import Structure from "./.config/struct"
import Tauri from "./.config/tauri"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...Structure,
  ...Tauri,
  ...Imports,

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",

  devtools: { enabled: true, timeline: { enabled: true } },
  alias: {
    block: fileURLToPath(new URL("./app/blocks", import.meta.url)),
    css: fileURLToPath(new URL("./app/assets/css", import.meta.url)),
    event: fileURLToPath(new URL("./events", import.meta.url)),
    mock: fileURLToPath(new URL("./app/mocks", import.meta.url)),
    schema: fileURLToPath(new URL("./app/schemas", import.meta.url)),
    worker: fileURLToPath(new URL("./app/assets/workers", import.meta.url)),
  },

  modules: [
    "@nuxt/test-utils/module",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-typed-router",
    "@nuxtjs/critters",
    "@nuxt/eslint",
  ],

  vite: {
    plugins: [purgePolyfills.vite({})],
  },

  colorMode: {
    classSuffix: "",
  },

  i18n: {
    defaultLocale: "en",
    langDir: "./languages",
    lazy: true,
    locales,
  },
})
