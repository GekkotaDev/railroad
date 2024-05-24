<script setup lang="ts">
import { VisuallyHidden } from "radix-vue"

type Props = {
  name: string
  label: string

  axis?: "horizontal" | "vertical"
  grow?: boolean
  hideLabel?: boolean
  iconSize?: string
  selected?: boolean
}

$defineProps<Props>()
</script>

<template>
  <div :class="!grow || 'grow'">
    <Ripple>
      <Button
        :variant="selected ? 'default' : 'ghost'"
        :class="`
          flex ${axis === 'horizontal' ? 'flex-row' : 'flex-col'}
          h-full cursor-pointer
        `"
      >
        <Icon :name :size="iconSize ?? '2em'" />

        <VisuallyHidden v-if="hideLabel">
          {{ label }}
        </VisuallyHidden>

        <p v-else class="select-none">
          {{ label }}
        </p>

        <div aria-hidden class="w-full grow" />
      </Button>
    </Ripple>
  </div>
</template>
