<script setup lang="ts">
type Props = {
  iconSize?: string
  index: number
  onSelect: (meta: { index: number; key: string }) => void

  destinations: {
    icon: string
    key: string
    label: string
  }[]

  labelBehavior?: (meta: {
    index: { selected: number; current: number }
    key: string
  }) => "show" | "hide"
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { labelBehavior = (_meta) => "show" } = $defineProps<Props>()
</script>

<template>
  <UiCard class="flex h-screen w-min flex-col rounded-none">
    <NavigationDestination
      v-for="(destination, currentIndex) in destinations"
      :key="destination.key"
      :name="destination.icon"
      :label="destination.label"
      :hide-label="
        labelBehavior({
          index: { selected: currentIndex, current: index },
          key: destination.key,
        }) === 'hide'
      "
      :selected="currentIndex == index"
      :icon-size
      @click="() => onSelect({ index: currentIndex, key: destination.key })"
    />
  </UiCard>
</template>
