<script lang="ts" setup>
import { useForwardPropsEmits } from "radix-vue"
import type { DrawerPortalProps } from "vaul-vue"
import { DrawerPortal } from "vaul-vue"

const props = defineProps<DrawerPortalProps>()

const forwarded = useForwardPropsEmits(props)
</script>

<template>
  <DrawerPortal v-bind="forwarded">
    <slot />
  </DrawerPortal>
</template>
