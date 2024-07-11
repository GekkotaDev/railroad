import { defineVitestConfig } from "@nuxt/test-utils/config"

export default defineVitestConfig({
  test: {
    coverage: {
      enabled: true,
      include: [
        "./app/components/**",
        "./app/composables/**",
        "./app/services/**",
        "./app/stores/**",
        "./app/utils/**",
      ],
      exclude: [
        "coverage/**",
        "dist/**",
        "**/[.]**",
        "packages/*/test?(s)/**",
        "**/*.d.ts",
        "**/virtual:*",
        "**/__x00__*",
        "**/\x00*",
        "cypress/**",
        "test?(s)/**",
        "test?(-*).?(c|m)[jt]s?(x)",
        "**/*{.,-}{test,spec}?(-d).?(c|m)[jt]s?(x)",
        "**/__tests__/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
        "**/vitest.{workspace,projects}.[jt]s?(on)",
        "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
        "**/mock/**",
        "**/mocks/**",
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

