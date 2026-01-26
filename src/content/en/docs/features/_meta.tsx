import BetaBadge from '@/components/beta-badge';
import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	dashboard: 'Dashboard',
	account: 'Account System',
	'custom-file-system': 'Custom File System',
	'document-collect': 'Document Collection',
	'document-manage': 'Document Management',
	podcast: 'Podcast Generation',
	engine: 'Parsing Engine',
	'section-info': 'Section Overview',
	'day-section': 'Daily Section',
	'section-share': 'Section Sharing and Co-creation',
	'section-create': 'Section Creation',
	graphrag: {
		title: (
			<div className='flex items-center gap-2'>
				Knowledge Graph
				<BetaBadge />
			</div>
		),
	},
	'hot-search': 'Hot Search',
	rss: {
		title: (
			<div className='flex items-center gap-2'>
				RSS
				<BetaBadge />
			</div>
		),
	},
	mcp: {
		title: (
			<div className='flex items-center gap-2'>
				Built-In MCP
				<BetaBadge />
			</div>
		),
	},
	notification: 'Notification Management',
	'custom-model': 'Custom Model',
	'revornix-ai': 'Revornix AI',
	api: 'API Management',
};

export default meta;
