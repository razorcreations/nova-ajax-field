module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  "ignorePatterns": ["resources/js/field.js"],
  rules: {
	// override/add rules settings here...
	"indent": ["error", "tab"]
  },
  env: {
      node: true,
  }
}