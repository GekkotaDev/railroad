/**
 * Tauri specific configuration.
 *
 * https://v2.tauri.app/start/frontend/nuxt/
 */

import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  ssr: false,

  devServer: {
    port: 3000,
    host: "localhost",
  },

  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,

    // Enable environment variables
    // Additional environment variables can be found at
    // https://tauri.app/2/reference/environment-variables/
    envPrefix: ["VITE_", "TAURI_"],

    server: {
      // Tauri requires a consistent port
      strictPort: true,

      hmr: {
        // Use websocket for mobile hot reloading
        protocol: "ws",

        // Make sure it's available on the network
        host: "0.0.0.0",

        // Use a specific port for hmr
        port: 3000,
      },
    },
  },
})
