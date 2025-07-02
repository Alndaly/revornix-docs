import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	index: {
		type: 'page',
		display: 'hidden',
		theme: {
			timestamp: false,
			layout: 'full',
			toc: false,
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
			timestamp: false,
			layout: 'full',
			toc: false,
		},
	},
};

export default meta;
