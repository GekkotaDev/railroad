// @ts-nocheck
import { defineFlatConfig } from "eslint-define-config";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import pluginJSDoc from "eslint-plugin-jsdoc";
import pluginSecurity from "eslint-plugin-security";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginVue from "eslint-plugin-vue";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";

/// <reference types="@eslint-types/jsdoc" />
/// <reference types="@eslint-types/typescript-eslint" />
/// <reference types="@eslint-types/unicorn" />

export default defineFlatConfig([
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginJSDoc.configs["flat/recommended"],
  pluginSecurity.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...pluginVueA11y.configs["flat/recommended"],
  {
    ignores: ["eslintrc.*js"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
      unicorn: pluginUnicorn,
    },
    rules: {
      "no-lonely-if": "warn",

      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "sort-imports": "off",
      "import/order": "off",

      //* Unicorn
      "unicorn/better-regex": "warn",
      "unicorn/catch-error-name": ["error", {}],
      "unicorn/consistent-function-scoping": "error",
      "unicorn/custom-error-definition": "error",
      "unicorn/escape-case": "warn",
      "unicorn/expiring-todo-comments": "error",
      "unicorn/explicit-length-check": "error",
      "unicorn/new-for-builtins": "warn",
      "unicorn/no-for-loop": "warn",
      "unicorn/no-instanceof-array": "warn",
      "unicorn/no-lonely-if": "warn",
      "unicorn/no-new-array": "warn",
      "unicorn/no-typeof-undefined": "warn",
      "unicorn/no-useless-length-check": "warn",
      "unicorn/no-useless-spread": "warn",
      "unicorn/numeric-separators-style": "warn",
      "unicorn/prefer-array-flat": "warn",
      "unicorn/prefer-array-flat-map": "warn",
      "unicorn/prefer-date-now": "warn",
      "unicorn/prefer-keyboard-event-key": "warn",
      "unicorn/prefer-modern-math-apis": "warn",
      "unicorn/prefer-node-protocol": "warn",
      "unicorn/prefer-set-has": "error",
      "unicorn/prefer-set-size": "warn",
      "unicorn/require-array-join-separator": "warn",
    },
  },
]);
