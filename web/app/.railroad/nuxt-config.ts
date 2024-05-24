import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  components: ["components", "providers/provider"],

  extends: ["../base", "../lib", "../widgets"],

  devtools: { enabled: true },

  dir: {
    pages: "routes",
  },

  imports: {
    dirs: ["composables", "providers/context", "services", "utils"],
    presets: [
      {
        from: "@tanstack/vue-query",
        imports: [
          "keepPreviousData",
          "skipToken",
          "useMutation",
          "useInfiniteQuery",
          "useIsFetching",
          "useIsMutating",
          "useQueries",
          "useQuery",
          "useQueryClient",
          "useQueryClients",
        ],
      },
    ],
  },

  pages: true,

  ssr: false,
})
