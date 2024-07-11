<script setup lang="ts">
import "~/assets/css/tailwind.css"

import { VueQueryDevtools } from "@tanstack/vue-query-devtools"
</script>

<template>
  <ViewPortProvider>
    <NuxtPage />
  </ViewPortProvider>

  <DevOnly>
    <VueQueryDevtools />
  </DevOnly>
</template>

<style>
body {
  background-color: transparent;
}
</style>
