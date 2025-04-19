import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	index: {
		type: 'page',
		display: 'hidden',
		theme: {
			timestamp: false,
			layout: 'full',
			toc: false
		},
	},
	docs: {
		type: 'page',
		title: '文档',
	},
	blogs: {
		type: 'page',
		title: '博客',
		theme: {
			layout: 'full'
		},
	},
	revornix: {
		type: 'page',
		href: 'https://revornix.com',
		title: '前往使用',
	},
};

export default meta;
