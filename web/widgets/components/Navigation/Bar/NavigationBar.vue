<script setup lang="ts">
type Props = {
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
  <Card class="flex justify-evenly rounded-none">
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
      grow
      @click="() => onSelect({ index: currentIndex, key: destination.key })"
    />
  </Card>
</template>
