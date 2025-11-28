import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import { baseConfig } from "#base.js";
import globals from "globals";

const reactConfig = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    extends: [baseConfig],
  },
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
]);

export { reactConfig };
