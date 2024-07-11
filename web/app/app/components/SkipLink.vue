<script setup lang="ts">
type Props = {
  label: string
  target?: string
}

const { target = "#focus-target" } = defineProps<Props>()
</script>

<template>
  <a
    :href="target"
    class="absolute bottom-0 left-0 translate-y-full focus-visible:translate-y-0 motion-safe:transition-transform"
  >
    <UiButton tabindex="-1">
      {{ label }}
    </UiButton>
  </a>
</template>
