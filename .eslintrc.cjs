module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:svelte/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    extraFileExtensions: [".svelte"]
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    "object-shorthand": [`error`, `always`],
    "prefer-const": `error`,
    quotes: [`error`, `backtick`]
  }
}
