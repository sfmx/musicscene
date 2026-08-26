// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      // Disable overly strict quote escaping - browsers handle these fine
      "react/no-unescaped-entities": "off",
      // Warn on unused vars instead of error (cleanup separately)
      "@typescript-eslint/no-unused-vars": "warn",
      // Enforce explicit types over 'any' - warn for now, target error after cleanup
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  {
    // Storybook-specific overrides
    files: ["**/*.stories.tsx", "**/*.stories.ts"],
    rules: {
      "storybook/no-renderer-packages": "off"
    }
  }
];

export default eslintConfig;
