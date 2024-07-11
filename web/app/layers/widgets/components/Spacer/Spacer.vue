<script setup lang="ts">
type Props = {
  height?: TwHeight
  width?: TwWidth
  grow?: boolean
}

const { height, width, grow } = defineProps<Props>()

const expander = computed(() => height || width || "grow")
const classname = computed(() => `${height} ${width} ${grow ? "grow" : ""}`)
</script>

<template>
  <div aria-hidden :class="`${classname} ${expander}`" />
</template>
