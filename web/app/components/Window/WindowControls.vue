<script setup lang="ts">
import { type Window } from "@tauri-apps/api/window"

type Props = {
  id: string
  forcePlatform?: "mac" | "pc"
  window?: Window
}

const { id, forcePlatform, window: _window } = $defineProps<Props>()

const window = _window ?? useWindows().get(id)
const platform = $computed(() => (useDevice().isMacOS ? "mac" : "pc"))
const selectedPlatform = $computed(() => forcePlatform ?? platform)
</script>

<template>
  <div v-if="selectedPlatform === 'mac'" class="flex space-x-1">
    <WindowCloseApple @close="() => window.close()" />
    <WindowMinimizeApple @minimize="() => window.minimize()" />
    <WindowZoomApple
      @maximize="() => window.toggleMaximize()"
      @restore="() => window.toggleMaximize()"
    />
  </div>

  <div v-if="selectedPlatform === 'pc'" class="absolute right-0 flex h-8">
    <WindowMinimizeUniversal @minimize="() => window.minimize()" />
    <WindowZoomUniversal
      @maximize="() => window.toggleMaximize()"
      @restore="() => window.toggleMaximize()"
    />
    <WindowCloseUniversal @close="() => window.close()" />
  </div>
</template>
