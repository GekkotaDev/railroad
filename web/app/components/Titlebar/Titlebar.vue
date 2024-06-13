<script setup lang="ts">
import type { Window } from "@tauri-apps/api/window"

type Props = {
  id: string
  menus: TitlebarMenuTrigger[]
}

const { id } = $defineProps<Props>()

let window: Window
const platform = $computed(() => (useDevice().isMacOS ? "mac" : "pc"))

onMounted(() => {
  window = useWindows().get(id)
  window.setSkipTaskbar(true)
})
</script>

<template>
  <UiMenubar class="border-none bg-transparent p-0 shadow-none">
    <div aria-hidden data-tauri-drag-region class="w-1" />

    <WindowControls v-if="platform === 'mac'" :id />

    <template v-if="platform === 'pc'">
      <div data-tauri-drag-region>
        <slot name="icon" />
      </div>

      <Spacer width="w-0.5" />

      <span
        data-tauri-drag-region
        class="select-none text-nowrap font-semibold"
      >
        <slot />
      </span>
    </template>

    <div aria-hidden data-tauri-drag-region class="w-1" />

    <UiMenubarMenu v-for="menu in menus" :key="menu.label">
      <UiMenubarTrigger class="font-normal">
        {{ menu.label }}
      </UiMenubarTrigger>
      <UiMenubarContent>
        <template v-for="child in menu.children">
          <TitlebarLeaf
            v-if="child.type === 'leaf'"
            :key="child.label"
            :action="child.action"
            :disabled="child.disabled"
            :label="child.label"
            :shortcut="child.shortcut"
          />

          <TitlebarSubmenu
            v-if="child.type === 'submenu'"
            :key="child.label"
            :children="child.children"
            :label="child.label"
          />
        </template>
      </UiMenubarContent>
    </UiMenubarMenu>

    <div aria-hidden data-tauri-drag-region class="h-[75%] grow self-end" />

    <WindowControls v-if="platform === 'pc'" :id />
  </UiMenubar>
</template>

~/typedefs/titlebar.types

