module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@ysl07/eslint-config-typescript',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multi-word-component-names': 'off',
  },
}
