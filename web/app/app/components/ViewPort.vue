<script setup lang="ts">
type Props = {
  class?: string
}

defineProps<Props>()

const { class: classname } = inject(ViewPortContext, { class: ref("") })
</script>

<template>
  <UiTooltipProvider>
    <UiCard
      id="app"
      ref="view"
      vaul-drawer-wrapper
      :class="`relative min-h-0 min-w-0 grow ${$props.class} ${classname}`"
    >
      <slot />
    </UiCard>
  </UiTooltipProvider>
</template>
