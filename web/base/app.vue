<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools"
</script>

<template>
  <HelloWorld />

  <DevOnly>
    <VueQueryDevtools />
  </DevOnly>
</template>

