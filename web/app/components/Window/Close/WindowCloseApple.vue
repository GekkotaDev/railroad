<script setup lang="ts">
type Props = {
  onClose: () => void
}

const color = computed(() =>
  useWindowFocus().value ? "bg-[#ff6159] active:bg-[#bf4942]" : "bg-[#ddd]",
)

$defineProps<Props>()
</script>

<template>
  <div
    :class="`
      flex items-center justify-center rounded-full
      hover:bg-[#ff6159]
      ${color}
    `"
  >
    <Icon
      name="radix-icons:cross-2"
      size="0.75rem"
      class="text-[#4d0000] opacity-0 hover:opacity-100 active:text-[#190000]"
    />
  </div>
</template>
