<script setup lang="ts">
import { useForwardPropsEmits } from "radix-vue"
import type { DrawerTriggerProps } from "vaul-vue"
import { DrawerTrigger } from "vaul-vue"

const props = defineProps<DrawerTriggerProps>()

const forwarded = useForwardPropsEmits(props)
</script>

<template>
  <DrawerTrigger v-bind="forwarded">
    <slot />
  </DrawerTrigger>
</template>
