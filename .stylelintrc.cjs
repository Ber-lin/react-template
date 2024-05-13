module.exports = {
	// 从标准配置中继承规则
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'prettier',
	],
	// stylelint-order按照顺序排列css属性
	plugins: [
		'stylelint-order',
		'stylelint-config-rational-order/plugin',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-prettier',
	],

	// 规则配置
	rules: {
		// 禁用注释前的空行规则
		'comment-empty-line-before': null,
		// 禁用声明前的空行规则
		'declaration-empty-line-before': null,
		// 指定函数名的大小写为小写
		'function-name-case': 'lower',
		// 禁用选择器特异性递减规则
		'no-descending-specificity': null,
		// 禁用无效的双斜杠注释规则
		'no-invalid-double-slash-comments': null,
		// 指定规则前需要空行
		// 'rule-empty-line-before': 'always',
		'order/properties-order': [],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': false,
			},
		],
		// 提示css语法错误
		'plugin/declaration-block-no-ignored-properties': true,
	},

	// 忽略检查的文件或文件夹
	ignoreFiles: ['node_modules/**/*', 'build/**/*'],
};
