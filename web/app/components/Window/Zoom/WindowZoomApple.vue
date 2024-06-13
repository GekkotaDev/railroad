<script setup lang="ts">
type Props = {
  onMaximize: () => void
  onRestore: () => void
}

const color = computed(() =>
  useWindowFocus().value ? "bg-[#28c941] active:bg-[#1d9730]" : "bg-[#ddd]",
)
const state = $computed(() => {
  if (useWindowSize().width.value === screen.availWidth) return "restore"
  return "maximize"
})

$defineProps<Props>()
</script>

<template>
  <div
    :class="`
      flex items-center justify-center rounded-full
      hover:bg-[#28c941] 
      ${color}
    `"
    @click="
      () =>
        match(state)
          .with('restore', () => onRestore())
          .with('maximize', () => onMaximize())
          .exhaustive()
    "
  >
    <Icon name="radix-icons:cross-2" size="0.75rem" class="invisible" />
  </div>
</template>
