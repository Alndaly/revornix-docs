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
		title: 'Documentation',
	},
	blogs: {
		type: 'page',
		title: 'Blog',
		theme: {
			breadcrumb: false,
			sidebar: false,
			timestamp: false,
			layout: 'full',
			toc: false,
			pagination: false,
			typesetting: 'article'
		},
	},
	roadmap: {
		type: 'page',
		href: 'https://huaqinda.notion.site/RoadMap-224bbdbfa03380fabd7beda0b0337ea3',
		title: 'Roadmap',
	}
};

export default meta;
