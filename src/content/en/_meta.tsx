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
		title: 'Documentation', // Translated to English
	},
	blogs: {
		type: 'page',
		title: 'Blog', // Translated to English
		theme: {
			layout: 'full',
		},
	},
};

export default meta;
