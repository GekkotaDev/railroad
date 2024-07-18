<script setup lang="ts">
import "~/assets/css/tailwind.css"

import { VueQueryDevtools } from "@tanstack/vue-query-devtools"
</script>

<template>
  <ViewPortProvider>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
