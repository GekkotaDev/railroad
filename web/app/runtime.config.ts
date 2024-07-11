import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  runtimeConfig: {
    /**
     *!Never ever insert secrets here, ever.
     * https://nuxt.com/docs/guide/going-further/runtime-config
     *
     * Variables that are exposed on the client.
     */
    public: {
      DEBUG: {
        /**
         * Developer tooling.
         *
         * The properties exposed here are intended to be a map of boolean
         * values used to toggle the visibility of developer tooling. Whether
         * these tools are stripped away in production or not are up to the
         * strategy taken such as using the `<DevOnly />` component.
         */
        TOOLS: {
          /** Tanstack Query devtools */
          query: process.env.NODE_ENV === "development",
        },
      },
    },
  },
})
