<script setup lang="ts">
type Props = {
  onMinimize: () => void
}

const color = computed(() =>
  useWindowFocus().value ? "bg-[#ffbd2e] active:bg-[#bf8e22]" : "bg-[#ddd]",
)

$defineProps<Props>()
</script>

<template>
  <div
    :class="`
      flex items-center justify-center rounded-full
      hover:bg-[#ffbd2e]
      ${color}
    `"
  >
    <Icon
      name="radix-icons:minus"
      size="0.75rem"
      class="text-[#995700] opacity-0 hover:opacity-100 active:text-[#592800]"
    />
  </div>
</template>
