<script setup lang="ts">
import { useForwardPropsEmits } from "radix-vue"
import type { DrawerCloseProps } from "vaul-vue"
import { DrawerClose } from "vaul-vue"

const props = defineProps<DrawerCloseProps>()

const forwarded = useForwardPropsEmits(props)
</script>

<template>
  <DrawerClose v-bind="forwarded">
    <slot />
  </DrawerClose>
</template>
