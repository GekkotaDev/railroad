export default (target = "focus-target") =>
  onMounted(() => nextTick(() => document.getElementById(target)?.focus()))
