<script setup lang="ts">
import type { TitlebarSubProps } from "#imports"

$defineProps<TitlebarSubProps>()
</script>

<template>
  <UiMenubarSub>
    <UiMenubarSubTrigger> {{ label }} </UiMenubarSubTrigger>

    <UiMenubarSubContent>
      <template v-for="child in children">
        <TitlebarLeaf
          v-if="child.type === 'leaf'"
          :key="child.label"
          :disabled="child.disabled"
          :label="child.label"
          :shortcut="child.shortcut"
          :action="child.action"
        />

        <TitlebarSubmenu
          v-if="child.type === 'submenu'"
          :key="child.label"
          :label="child.label"
          :children="child.children"
        />
      </template>
    </UiMenubarSubContent>
  </UiMenubarSub>
</template>

