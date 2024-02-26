module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    NodeJS: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    // "@nuxt/eslint-config",
    // "plugin:prettier/recommended",
    'airbnb-base',
  ],
  plugins: [],
  rules: {
    'vue/attribute-hyphenation': 'off', // 譬如 vuetify 的 :onLoad 不能改為 :on-load
    'import/no-unresolved': 'off', // 會報錯
    'object-curly-newline': 'off', // 跟 prettier 的結果衝突
  },
};
