module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		// 自动禁用与 prettier 冲突的规则
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	overrides: [
		// 检测ts和tsx，注意files要包括文件，否则会报错
		{
			files: ['./src/**/*.ts', './src/**/*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				project: './tsconfig.json', // 指定 TypeScript 配置文件
			},
		},
		// 不检测js文件的类型, 有ignorePatterns就不需要了
		{
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			files: ['./**/*.js'],
		},
	],

	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{allowConstantExport: true},
		],
		// 对象的最后一个可以增加【,】
		'@typescript-eslint/comma-dangle': 'OFF',
		// 单引号关闭
		'@typescript-eslint/quotes': 'OFF',
		// 需要分号
		'@typescript-eslint/semi': 'OFF',
		// 不允许使用var
		'no-var': 'error',
		// 函数不需要ts标注返回类型
		'@typescript-eslint/explicit-function-return-type': 'OFF',
		'no-tabs': 'OFF',
		'@typescript-eslint/indent': 'OFF',
	},
};
