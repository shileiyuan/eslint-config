module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@ysl/eslint-config-typescript'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
