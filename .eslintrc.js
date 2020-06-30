module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
	// override/add rules settings here...
	"indent": ["error", "tab"]
  },
  env: {
      node: true,
  }
}