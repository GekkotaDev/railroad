import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    coverage: {
      enabled: true,
      include: [
        "components/**",
        "composables/**",
        "services/**",
        "stores/**",
        "utils/**",
      ],
    },
    environmentOptions: {
      domEnvironment: "jsdom",
      nuxt: {
        mock: {
          indexedDb: true,
          intersectionObserver: true,
        },
      },
    },
    globals: true,
    typecheck: {
      //! Do use `nuxt typecheck` instead.
      enabled: false,
    },
    silent: true,
  },
})
