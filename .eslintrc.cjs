module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2022: true
    },
    extends: [
        'standard-with-typescript',
        '@nuxt/eslint-config'
    ],
    rules: {
        '@typescript-eslint/space-before-function-paren': ['error', 'never']
    }
}