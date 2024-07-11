import "~/assets/css/tailwind.css"
import "~/assets/css/theme/light.css"
import "~/assets/css/theme/dark.css"

import { defineSetupVue3 } from "@histoire/plugin-vue"
import VWave from "v-wave"

export const setupVue3 = defineSetupVue3(
  ({ app, story: _story, variant: _variant }) => {
    app.use(VWave, {
      color: "red",
      initialOpacity: 0.5,
      easing: "ease-in",
    })
  },
)

