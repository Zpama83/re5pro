import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  // The RE5 exam engine and its metadata layer are plain .jsx/.js. The
  // config used to match only ts/tsx, so ~1,800 lines of the app's most
  // important logic went unlinted — that is how a reference to an
  // undeclared variable reached production. Lint them too.
  {
    extends: [js.configs.recommended],
    files: ["**/*.{js,jsx}"],
    ignores: ["*.config.js", "postcss.config.js", "eslint.config.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // no-undef is the rule that matters here: it is what catches a
      // reference to a variable nobody declared.
      "no-undef": "error",
      // Off without eslint-plugin-react: this config cannot see that a
      // component referenced only from JSX is used, so it false-positives.
      "no-unused-vars": "off",
      // Swallowing a localStorage failure is deliberate — private-mode
      // browsers throw on access and studying must still work.
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
);
