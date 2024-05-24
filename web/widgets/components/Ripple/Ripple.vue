<script lang="ts" setup>
import { Primitive } from "radix-vue"
import VWave from "v-wave"

const { vWave } = VWave.createLocalWaveDirective({
  duration: 0.3,
})

$defineProps<{
  class?: string
}>()
</script>

<template>
  <Primitive v-wave as-child :class="$props.class">
    <slot />
  </Primitive>
</template>
