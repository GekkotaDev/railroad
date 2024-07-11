<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"

type Props = {
  onMaximize: () => void
  onRestore: () => void
}

const { width } = useWindowSize()
const state = computed(() => {
  if (
    width.value === screen.availWidth - 1 ||
    width.value === screen.availWidth ||
    width.value === screen.availWidth + 1
  )
    return "restore"
  return "maximize"
})

defineProps<Props>()
</script>

<template>
  <div
    aria-hidden
    class="flex h-full w-12 items-center justify-center transition hover:bg-neutral-500/20"
    @click="
      () =>
        match(state)
          .with('restore', () => onRestore())
          .with('maximize', () => onMaximize())
          .exhaustive()
    "
  >
    <Icon
      v-show="state === 'restore'"
      name="material-symbols:chrome-restore-outline-rounded"
    />
    <Icon
      v-show="state === 'maximize'"
      name="material-symbols:chrome-maximize-outline"
    />
  </div>
</template>
