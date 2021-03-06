module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'indent': ['warn', 4 || 2]
    }
}
