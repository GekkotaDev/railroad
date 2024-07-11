import { Window } from "@tauri-apps/api/window"

const windows = ref(SatisfiesAs<Map<string, Window>>(new Map()))

export default () => ({
  get(windowLabel: string) {
    let window = windows.value.get(windowLabel)

    if (window === undefined) {
      window = new Window(windowLabel)
      windows.value.set(windowLabel, window)
    }

    return window
  },

  dispose(windowLabel: string) {
    const window = windows.value.get(windowLabel)

    if (window === undefined) return

    window.destroy()
  },
})
