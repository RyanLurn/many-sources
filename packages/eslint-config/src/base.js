import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier/flat";
import unicorn from "eslint-plugin-unicorn";
import ts from "typescript-eslint";
import js from "@eslint/js";

const baseConfig = defineConfig([
  globalIgnores([
    "**/.next/",
    "**/dist/",
    "**/out/",
    "**/build/",
    "**/.turbo/",
    "**/next-env.d.ts",
  ]),
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "eslint.config.js",
            "eslint.config.mjs",
            "postcss.config.mjs",
          ],
        },
      },
    },
  },
  perfectionist.configs["recommended-line-length"],
  unicorn.configs.recommended,
  prettier,
]);

export { baseConfig };
