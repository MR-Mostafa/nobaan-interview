module.exports = {
	parser: '@typescript-eslint/parser',
	root: true,
	extends: [
		'plugin:@typescript-eslint/recommended',
		'@fullstacksjs/eslint-config/base',
		'@fullstacksjs/eslint-config/react',
		'@fullstacksjs/eslint-config/typescript',
	],
	plugins: ['@typescript-eslint'],
	rules: {
		'no-console': 'warn',
		'fp/no-delete': 'error',
		'fp/no-get-set': 'error',
		'fp/no-mutating-methods': 'error',
		'fp/no-this': 'error',
		'fp/no-throw': 'error',
		'@typescript-eslint/naming-convention': [
			'warn',
			{
				selector: 'default',
				format: ['camelCase'],
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
			},
			// variables, CONSTANTS, ReactComponents
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			},
			{
				selector: 'parameter',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allowSingleOrDouble',
			},
			{
				selector: 'memberLike',
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'memberLike',
				modifiers: ['static'],
				format: ['camelCase', 'PascalCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
			{
				selector: 'enumMember',
				format: ['PascalCase'],
			},
			// disallow I prefix for interfaces
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: { regex: '^I[A-Za-z]Props$', match: false },
			},
		],
		'import/extensions': 'off',
		'import/no-unresolved': ['error', { ignore: ['^~*'] }],
		'simple-import-sort/imports': 'off',
		'simple-import-sort/exports': 'off',
		'react/no-array-index-key': 'off',
	},
};
