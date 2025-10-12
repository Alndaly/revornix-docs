import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	index: {
		type: 'page',
		display: 'hidden',
		theme: {
			copyPage: false,
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
			copyPage: false,
			breadcrumb: false,
			sidebar: false,
			timestamp: false,
			layout: 'full',
			toc: false,
			pagination: false,
			typesetting: 'article',
		},
	},
	roadmap: {
		type: 'page',
		href: 'https://huaqinda.notion.site/RoadMap-224bbdbfa03380fabd7beda0b0337ea3',
		title: '项目规划',
	},
};

export default meta;
