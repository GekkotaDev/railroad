<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools"

import "~/assets/tailwind.css"
import "~/assets/css.css"
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <DevOnly>
    <VueQueryDevtools />
  </DevOnly>
</template>

