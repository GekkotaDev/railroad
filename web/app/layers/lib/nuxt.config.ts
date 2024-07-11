// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],

  imports: {
    presets: [
      {
        from: "@gcko/signals-vue",
        imports: ["signal", "state", "derived", "toSignal", "toSignals"],
      },
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
      {
        from: "colord",
        imports: [{ name: "colord", as: "color" }],
      },
      {
        from: "dayjs",
        imports: [{ name: "default", as: "day" }],
      },
      {
        from: "immer",
        imports: ["enableMapSet", "enablePatches"],
      },
      {
        from: "mitsu",
        imports: ["createInjector", "injected"],
      },
      {
        from: "ts-pattern",
        imports: ["match", "P"],
      },
    ],
  },
})

