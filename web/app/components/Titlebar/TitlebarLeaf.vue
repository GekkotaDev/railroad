<script setup lang="ts">
import type { TitlebarLeafProps } from "#imports"

$defineProps<TitlebarLeafProps>()
</script>

<template>
  <UiMenubarItem :disabled @select="action">
    {{ label }}
    <UiMenubarShortcut v-if="shortcut"> {{ shortcut }} </UiMenubarShortcut>
  </UiMenubarItem>
</template>

