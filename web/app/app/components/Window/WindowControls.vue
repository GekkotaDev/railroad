<script setup lang="ts">
import { type Window } from "@tauri-apps/api/window"

type Props = {
  id: string
  forcePlatform?: "mac" | "pc"
  window?: Window
}

const { id, forcePlatform, window: _window } = defineProps<Props>()

const window = _window ?? useWindows().get(id)
const platform = computed(() => (useDevice().isMacOS ? "mac" : "pc"))
const selectedPlatform = computed(() => forcePlatform ?? platform.value)
</script>

<template>
  <div v-if="selectedPlatform === 'mac'" class="flex space-x-1">
    <CupertinoWindowClose @close="() => window.close()" />
    <CupertinoWindowMinimize @minimize="() => window.minimize()" />
    <CupertinoWindowZoom
      @maximize="() => window.toggleMaximize()"
      @restore="() => window.toggleMaximize()"
    />
  </div>

  <div v-if="selectedPlatform === 'pc'" class="absolute right-0 flex h-8">
    <WindowMinimize @minimize="() => window.minimize()" />
    <WindowZoom
      @maximize="() => window.toggleMaximize()"
      @restore="() => window.toggleMaximize()"
    />
    <WindowClose @close="() => window.close()" />
  </div>
</template>
