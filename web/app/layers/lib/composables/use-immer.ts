import { produce } from "immer"

export default <T>(initial: T) => {
  const state = shallowRef<T>(initial)
  const update = (updater: (state: T) => void) => {
    state.value = produce(state.value, updater)
  }

  return [state, update] as const
}
