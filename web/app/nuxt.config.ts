import { fileURLToPath } from "node:url"

import Defaults from "./.railroad/nuxt-config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...Defaults,

  alias: {
    ...(Defaults?.alias ?? {}),
    "#!": fileURLToPath(new URL("./macros", import.meta.url)),
    workers: fileURLToPath(new URL("./assets/workers", import.meta.url)),
  },

  modules: ["@nuxtjs/i18n", "@nuxtjs/critters", "nuxt-typed-router"],
})

