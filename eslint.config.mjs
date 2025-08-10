import antfu from "@antfu/eslint-config";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(antfu({
  ignores: ["./app/components/ui", "./app/assets/css/tailwind.css"],
  type: "app",
  vue: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  rules: {
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
  },
}));
