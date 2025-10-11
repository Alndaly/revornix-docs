import BetaBadge from '@/components/beta-badge';
import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	dashboard: 'Dashboard',
	account: 'Account',
	'document-collect': 'Document Collect',
	'document-manage': 'Document Manage',
	graphrag: {
		title: (
			<div className='flex items-center gap-2'>
				Knowledge Graph
				<BetaBadge />
			</div>
		),
	},
	'custom-file-system': 'Custom File System',
	engine: 'Document Converter',
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
	section: {
		title: (
			<div className='flex items-center gap-2'>
				Section Manage
				<BetaBadge />
			</div>
		),
	},
	api: 'API Manage',
};

export default meta;
