// @ts-check
import config from "config-eslint"
import { defineFlatConfig } from "eslint-define-config"

import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  ...config,
  defineFlatConfig([
    {
      ignores: [
        "**/*.spec.*",
        "**/*.test.*",
        "**/*.story.*",
        "**/components/ui/**/*",
      ],
    },
  ]),
)
