// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@oku-ui/motion-nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "@nuxt/icon"
  ]
})