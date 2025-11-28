import { defineConfig } from "eslint/config";
import next from "@next/eslint-plugin-next";
import { reactConfig } from "#react.js";
import globals from "globals";

const nextConfig = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    extends: [reactConfig],
  },
  next.configs.recommended,
  next.configs["core-web-vitals"],
]);

export { nextConfig };
