module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "globals": {
    "Nova": true,
    "store": true,
  },
  rules: {
	// override/add rules settings here...
	"indent": ["error", "tab"]
  },
  env: {
      node: true,
  },
}