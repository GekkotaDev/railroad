<script setup lang="ts">
type Props = {
  onClose: () => void
}

const { onClose } = defineProps<Props>()
</script>

<template>
  <div
    aria-hidden
    class="flex h-full w-10 items-center justify-center transition hover:bg-[#c42b1c] hover:text-white"
    role="button"
    @click="onClose"
  >
    <Icon name="material-symbols:close-rounded" />
  </div>
</template>
