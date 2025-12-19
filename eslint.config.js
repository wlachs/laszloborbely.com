import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// eslint-disable-next-line import/no-default-export
export default defineConfig(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{js,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'simple-import-sort': simpleImportSort,
			'@tanstack/query': pluginQuery,
			import: importPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...pluginQuery.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'import/first': 'error',
			'import/newline-after-import': 'error',
			'import/no-default-export': 'error',
			'import/no-duplicates': 'error',
		},
	},
).concat(eslintPluginPrettier);
