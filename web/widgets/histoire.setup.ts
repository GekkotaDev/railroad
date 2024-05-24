import "~/assets/css/tailwind.css"
import "~/assets/theme/light.css"
import "~/assets/theme/dark.css"

import { defineSetupVue3 } from "@histoire/plugin-vue"
import VWave from "v-wave"

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.use(VWave, {
    color: "red",
    initialOpacity: 0.5,
    easing: "ease-in",
  })
})
