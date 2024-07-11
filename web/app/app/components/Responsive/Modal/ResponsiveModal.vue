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
  /**
   * Injected instance of a `Device` type.
   */
  device: Device
  description: string
  title: string
}

const open = defineModel<boolean>("open", { default: false })

defineProps<Props>()
</script>

<template>
  <UiDrawer v-if="device.isMobile" v-model:open="open">
    <UiDrawerTrigger as-child> </UiDrawerTrigger>

    <UiDrawerContent>
      <UiDrawerHeader>
        <UiDrawerTitle> {{ title }} </UiDrawerTitle>
        <UiDrawerDescription>
          {{ description }}
        </UiDrawerDescription>
      </UiDrawerHeader>

      <slot />

      <UiDrawerFooter>
        <slot name="footer" />

        <UiDrawerClose as-child>
          <UiButton variant="outline"> Cancel </UiButton>
        </UiDrawerClose>
      </UiDrawerFooter>
    </UiDrawerContent>
  </UiDrawer>

  <UiDialog v-if="device.isDesktop" v-model:open="open">
    <UiDialogTrigger as-child>
      <slot name="trigger" />
    </UiDialogTrigger>

    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle> {{ title }} </UiDialogTitle>
        <UiDialogDescription>
          {{ description }}
        </UiDialogDescription>
      </UiDialogHeader>

      <slot />

      <UiDialogFooter>
        <slot name="footer" />
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>
