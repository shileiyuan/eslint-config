module.exports = {
  extends: [
    'plugin:react/recommended',
    '@ysl07/eslint-config-typescript',
    'plugin:react/jsx-runtime',
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}
