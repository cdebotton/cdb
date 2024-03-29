module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3', 'import'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'import/order': [
			2,
			{
				'newlines-between': 'always',
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: false
				}
			}
		]
	}
};
