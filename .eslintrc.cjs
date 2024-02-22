module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "vue/attribute-hyphenation": "off", // 譬如 vuetify 的 :onLoad 不能改為 :on-load
  },
}
