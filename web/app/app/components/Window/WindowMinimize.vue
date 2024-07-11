<script setup lang="ts">
type Props = {
  onMinimize: () => void
}

defineProps<Props>()
</script>

<template>
  <div
    aria-hidden
    class="flex h-full w-12 items-center justify-center transition hover:bg-neutral-500/20"
    @click="onMinimize"
  >
    <Icon name="material-symbols:chrome-minimize-rounded" />
  </div>
</template>
