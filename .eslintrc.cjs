module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  parserOptions: { // fix for js code parser
    parser: {
      js: '@typescript-eslint/parser',
      jsx: '@typescript-eslint/parser',
    }
  },
  extends: [
    'standard-with-typescript',
    '@nuxt/eslint-config'
  ]
}
