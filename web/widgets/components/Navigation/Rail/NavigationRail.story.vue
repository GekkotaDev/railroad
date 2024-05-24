<script setup lang="ts">
const selectedIndex = ref(0)
const currentKey = ref("None")
</script>

<template>
  <Story>
    <template #controls> </template>

    <Variant title="default">
      <div class="flex flex-row">
        <NavigationRail
          label-axis="horizontal"
          :index="selectedIndex"
          :destinations="[
            {
              icon: 'material-symbols:home',
              key: '/home',
              label: 'Home',
            },
            {
              icon: 'material-symbols:search',
              key: '/search',
              label: 'Search',
            },
            {
              icon: 'material-symbols:settings',
              key: '/settings',
              label: 'Settings',
            },
          ]"
          :on-select="
            ({ index, key }) => {
              selectedIndex = index
              currentKey = key
            }
          "
        />
        <p>{{ currentKey }}</p>
      </div>
    </Variant>
  </Story>
</template>
