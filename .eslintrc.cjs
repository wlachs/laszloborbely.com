module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'import', 'simple-import-sort', 'sort-keys-fix'],
	root: true,
	rules: {
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-default-export': 'error',
		'import/no-duplicates': 'error',
		'react/react-in-jsx-scope': 'off',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'sort-keys-fix/sort-keys-fix': 'error',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: true,
			typescript: true,
		},
		react: {
			version: 'detect',
		},
	},
};
