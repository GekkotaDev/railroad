// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/test-utils/module",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@nuxtjs/tailwindcss",
    "@oku-ui/motion-nuxt",
    "@vue-macros/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
  ],

  imports: {
    presets: [
      {
        from: "@gcko/patterns",
        imports: ["ok", "fail", "Ok", "Fail", "Result"],
      },
      {
        from: "@gcko/vue",
        imports: ["buildContext", "createContext", "useContext"],
      },
      {
        from: "immer",
        imports: ["produce"],
      },
      {
        from: "ts-pattern",
        imports: ["match", "P"],
      },
    ],
  },

  devtools: { enabled: true },
  pages: true,
})

