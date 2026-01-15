import BetaBadge from '@/components/beta-badge';
import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
	dashboard: '面板查看',
	account: '账户体系',
	'custom-file-system': '自定义文件系统',
	'document-collect': '文档收集',
	'document-manage': '文档管理',
	podcast: '播客机制',
	engine: '文档解析',
	'section-info': '专栏基础信息',
	'day-section': '今日专栏',
	'section-share': '专栏分享与共创',
	'section-create': '专栏创建',
	graphrag: {
		title: (
			<div className='flex items-center gap-2'>
				知识图谱
				<BetaBadge />
			</div>
		),
	},
	'hot-search': '热搜面板',
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
				内置MCP
				<BetaBadge />
			</div>
		),
	},
	notification: '通知管理',
	'custom-model': '自定义模型',
	'revornix-ai': '智能助手',
	api: 'API管理',
};

export default meta;
