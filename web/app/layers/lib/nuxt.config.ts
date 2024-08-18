// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt"],

  imports: {
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
      {
        from: "colord",
        imports: [{ name: "colord", as: "color" }],
      },
      {
        from: "dahon/bridge",
        imports: ["toSignal"],
      },
      {
        from: "dahon/mutable",
        imports: ["useMutable", "useImmer"],
      },
      {
        from: "dahon/signal",
        imports: ["signal", "Signal", "SignalHooks", "WritableSignal"],
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
        from: "neverthrow",
        imports: [
          "Result",
          "ResultAsync",
          "err",
          "errAsync",
          "ok",
          "okAsync",
          "safeTry",
        ],
      },
      {
        from: "ts-pattern",
        imports: ["match", "P"],
      },
    ],
  },
})
