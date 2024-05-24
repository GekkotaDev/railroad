export {}

/// <reference types="@histoire/plugin-vue/components" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
    }
  }
}
