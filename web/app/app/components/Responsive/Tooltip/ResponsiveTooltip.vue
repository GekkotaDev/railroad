<!--
  Platform aware tooltip component.

  On desktop, responsive tooltips when hovered on by the cursor will render a
  tooltip as usual. On mobile however, the tooltip trigger must be tapped by
  the user, with the tooltip itself replaced by a drawer.
-->

<script setup lang="ts">
/**
 * Subset of the Nuxt Device API, concerned with only the methods that are
 * needed to differentiate between desktop and mobile.
 */
type Device = {
  isDesktop: boolean
  isMobile: boolean
}

type Props = {
  asChild?: boolean

  /**
   * Injected instance of a `Device` type.
   */
  device: Device

  /**
   * The label providing context to the user about the drawer.
   */
  label: string

  /**
   * The position of the tooltip itself relative to the trigger.
   */
  side?: "top" | "bottom" | "left" | "right"
}

const { device: $device } = defineProps<Props>()

const platform = computed(() => ($device.isDesktop ? "desktop" : "mobile"))
</script>

<template>
  <UiDrawer v-if="platform === 'mobile'">
    <UiDrawerTrigger :as-child>
      <slot name="trigger" />
    </UiDrawerTrigger>

    <UiDrawerContent>
      <UiDrawerHeader>
        <UiDrawerTitle>
          <p>{{ label }}</p>
        </UiDrawerTitle>
        <UiDrawerDescription class="text-justify">
          <slot />
        </UiDrawerDescription>
      </UiDrawerHeader>

      <UiDrawerFooter>
        <UiDrawerClose as-child>
          <UiButton> Close </UiButton>
        </UiDrawerClose>
      </UiDrawerFooter>
    </UiDrawerContent>
  </UiDrawer>

  <UiTooltip v-if="platform === 'desktop'">
    <UiTooltipTrigger :as-child>
      <slot name="trigger" />
    </UiTooltipTrigger>

    <UiTooltipContent :side class="max-w-[60ch] text-justify">
      <slot />
    </UiTooltipContent>
  </UiTooltip>
</template>
