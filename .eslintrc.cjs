module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier', 'plugin:svelte/recommended', 'standard-jsdoc'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser'
		}
	]
};