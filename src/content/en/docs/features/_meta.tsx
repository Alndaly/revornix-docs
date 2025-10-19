import BetaBadge from '@/components/beta-badge';
import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	dashboard: 'Dashboard',
	account: 'Account',
	'custom-file-system': 'Custom File System',
	'document-collect': 'Document Collect',
	'document-manage': 'Document Manage',
	engine: 'Document Converter',
	'section-info': 'Section Overview',
	'day-section': 'Daily Section',
	'section-share': 'Section Sharing & Co-Creation',
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
	notification: 'Notification Manage',
	'custom-model': 'Custom Model',
	'revornix-ai': {
		title: (
			<div className='flex items-center gap-2'>
				Revornix AI
				<BetaBadge />
			</div>
		),
	},
	api: 'API Manage',
};

export default meta;
