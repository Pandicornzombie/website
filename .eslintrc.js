module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'vue/script-indent': [
      'error',
      2, {
        baseIndent: 1
      }
    ]
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off'
    }
  }]
}
