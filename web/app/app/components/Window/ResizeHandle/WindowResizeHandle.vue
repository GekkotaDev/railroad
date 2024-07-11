<script setup lang="ts">
import { getCurrent } from "@tauri-apps/api/window"

type ResizeDirection = "North" | "East" | "West" | "South"
type Props = {
  direction: ResizeDirection
}

const props = defineProps<Props>()

const orientation = computed(() =>
  match(props.direction)
    .with(P.union("North", "South"), () => "w-full h-1")
    .with(P.union("East", "West"), () => "h-full w-1")
    .exhaustive(),
)

const side = computed(() =>
  match(props.direction)
    .with("North", () => "top-0 cursor-n-resize")
    .with("East", () => "right-0 cursor-e-resize")
    .with("West", () => "left-0 cursor-w-resize")
    .with("South", () => "bottom-0 cursor-s-resize")
    .exhaustive(),
)
</script>

<template>
  <div
    aria-hidden
    :class="`${orientation} ${side} absolute`"
    @mousedown="() => getCurrent().startResizeDragging(direction).then()"
  />
</template>
