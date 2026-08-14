import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export default [
  // 1. Ignore build artifacts globally
  {
    ignores: [
      ".next/*",
      ".github/*",
      "*.mdx",
      "*.md",
      "node_modules/*",
      "dist/*",
    ],
  },

  // 2. Base ESLint Recommended Engine Defaults
  js.configs.recommended,

  // 3. Inject Modern Next.js 16 Flat Rules Natively
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // 4. Main Project Processing Rules Architecture
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
      prettier: prettierPlugin,
    },
    rules: {
      // Inherit prettier settings natively
      ...prettierConfig.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: "all",
        }

      ],

      // Clean setup for unused imports setup
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Next.js specific tweaks for safety
      "@next/next/no-html-link-for-pages": "error",
    },
  },
];
