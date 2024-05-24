<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools"
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <DevOnly>
    <VueQueryDevtools />
  </DevOnly>
</template>

