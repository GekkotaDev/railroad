/**
 * Define the directories where components and modules will be automatically
 * imported into global scope.
 */

import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  components: ["components", "providers", "icons"],

  imports: {
    dirs: ["composables", "context", "services", "stores", "types", "utils"],
  },
})
