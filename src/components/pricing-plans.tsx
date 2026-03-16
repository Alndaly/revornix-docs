'use client';

import Link from 'next/link';
import { CircleCheckBig, Info, Star } from 'lucide-react';
import { useState } from 'react';

import { Button } from './ui/button';
import { Badge } from './ui/badge';

type Lang = 'zh' | 'en';
type Currency = 'CNY' | 'USD';

type Feature = {
	text: string;
	badge?: string;
};

type Plan = {
	name: string;
	prices?: Record<Currency, string>;
	price?: string;
	unit: string;
	currencyLabel?: string;
	recommended?: boolean;
	custom?: boolean;
	description?: string;
	features?: Feature[];
	buttonText: string;
	buttonHref: string;
};

const contentMap: Record<
	Lang,
	{
		warningTitle: string;
		warningText: string;
		recommendedText: string;
		cnyText: string;
		usdText: string;
		plans: Plan[];
	}
> = {
	zh: {
		warningTitle: '警告',
		warningText:
			'如果新计划与原有计划一致，那么时间将正常向后延；如果新计划与原计划不一致，那么原有计划将被延后到新计划结束，新计划将立即生效；暂不支持从高级订阅降级到更低订阅。同时请注意由于不同国家地区的服务器、模型等成本不同，所以使用不同货币支付价格也会有所差异，具体请以实际支付价格为准。',
		recommendedText: '用户偏爱',
		cnyText: '人民币',
		usdText: '美元',
		plans: [
			{
				name: '免费计划',
				prices: {
					CNY: 'CNY 0',
					USD: 'USD 0',
				},
				unit: '/月',
				currencyLabel: '货币类型',
				buttonText: '订阅',
				buttonHref: 'https://app.revornix.com/account/plan',
				features: [
					{ text: '收录链接、文件', badge: '20 each' },
					{ text: '收录速记' },
					{ text: '文档待读记录' },
					{ text: '多端同步' },
					{ text: 'AI智能总结（需要自行配置模型）' },
					{ text: '专栏插图生成（需要自行配置模型）' },
					{ text: 'Revornix AI（需要自行配置模型）' },
					{ text: '各大平台热搜一览' },
					{ text: '自动推送当天热搜以及知识库总结（需要自行配置模型）' },
					{ text: 'API接口收录', badge: '10 times / day' },
					{ text: 'MCP 客户端' },
					{ text: '自动生成专栏/文档的播客（需要自行配置模型）' },
				],
			},
			{
				name: 'Pro 计划',
				prices: {
					CNY: 'CNY 99',
					USD: 'USD 32',
				},
				unit: '/月',
				currencyLabel: '货币类型',
				recommended: true,
				buttonText: '订阅',
				buttonHref: 'https://app.revornix.com/account/plan',
				features: [
					{ text: '收录链接、文件、速记' },
					{ text: 'RSS订阅' },
					{ text: '文档待读记录' },
					{ text: '文档/专栏知识图谱' },
					{ text: '多端同步' },
					{ text: 'AI智能总结（可有限度的使用Revornix官方提供的模型接入）' },
					{ text: '专栏插图生成（可有限度的使用Revornix官方提供的模型接入）' },
					{ text: 'Revornix AI（可有限度的使用Revornix官方提供的模型接入）' },
					{ text: '各大平台热搜一览' },
					{ text: '自动推送当天热搜以及知识库总结（有限度的使用Revornix官方提供的模型接入）' },
					{ text: 'API接口收录', badge: '25 times / day' },
					{ text: 'MCP 客户端和服务端' },
					{ text: '自动生成专栏/文档的播客（可有限度的使用Revornix官方提供的模型接入）' },
					{ text: '专栏多人协作' },
				],
			},
			{
				name: 'Max 计划',
				prices: {
					CNY: 'CNY 299',
					USD: 'USD 88',
				},
				unit: '/月',
				currencyLabel: '货币类型',
				buttonText: '订阅',
				buttonHref: 'https://app.revornix.com/account/plan',
				features: [
					{ text: '收录链接、文件、速记' },
					{ text: 'RSS订阅' },
					{ text: '文档待读记录' },
					{ text: '文档/专栏知识图谱' },
					{ text: '多端同步' },
					{ text: 'AI智能总结（可较高限度的使用Revornix官方提供的模型接入）' },
					{ text: '专栏插图生成（可较高限度的使用Revornix官方提供的模型接入）' },
					{ text: 'Revornix AI（可较高限度的使用Revornix官方提供的模型接入）' },
					{ text: '各大平台热搜一览' },
					{ text: '自动推送当天热搜以及知识库总结（可较高限度的使用Revornix官方提供的模型接入）' },
					{ text: 'API接口收录', badge: '50 times / day' },
					{ text: 'MCP 客户端和服务端' },
					{ text: '自动生成专栏/文档的播客（可较高限度的使用Revornix官方提供的模型接入）' },
					{ text: '专栏多人协作' },
				],
			},
			{
				name: '定制计划',
				price: '待定',
				unit: '/月',
				custom: true,
				description:
					'该计划属于定制计划，请联系客服进行询问，暂不支持定制低于max配额的计划。',
				buttonText: '联系客服',
				buttonHref: '/docs/contact',
			},
		],
	},
	en: {
		warningTitle: 'Warning',
		warningText:
			'If the new plan is the same as the current plan, time will be extended normally. If the new plan is different, the original plan will be postponed until the new plan ends and the new plan will take effect immediately. Downgrading from a higher-tier plan to a lower-tier plan is currently not supported. Please note that actual payment prices may vary across countries and regions due to differences in server, model, and other costs. Please refer to the final checkout price.',
		recommendedText: 'Recommended',
		cnyText: 'CNY',
		usdText: 'USD',
		plans: [
			{
				name: 'Free Plan',
				prices: {
					CNY: 'CNY 0',
					USD: 'USD 0',
				},
				unit: '/Month',
				currencyLabel: 'Currency',
				buttonText: 'Subscribe',
				buttonHref: 'https://app.revornix.com/account/plan',
				features: [
					{ text: 'Capture links, files.', badge: '20 each' },
					{ text: 'Capture quick notes.' },
					{ text: 'Document reading queue.' },
					{ text: 'Multi-device sync.' },
					{ text: 'AI-powered summarization (requires self-configured model).' },
					{ text: 'Section illustration generation (requires self-configured model).' },
					{ text: 'Revornix AI (requires self-configured model).' },
					{ text: 'Overview of trending topics across major platforms.' },
					{ text: "Automatically push the day's trending topics and knowledge base summary (requires self-configured model)." },
					{ text: 'API endpoint ingestion.', badge: '10 times / day' },
					{ text: 'MCP Client' },
					{ text: 'Automatically generate podcasts for sections/documents (requires self-configured model).' },
				],
			},
			{
				name: 'Pro Plan',
				prices: {
					CNY: 'CNY 99',
					USD: 'USD 32',
				},
				unit: '/Month',
				currencyLabel: 'Currency',
				recommended: true,
				buttonText: 'Subscribe',
				buttonHref: 'https://app.revornix.com/account/plan',
				features: [
					{ text: 'Capture links, files, and quick notes.' },
					{ text: 'RSS subscription.' },
					{ text: 'Document reading queue.' },
					{ text: 'Document/section knowledge graph.' },
					{ text: 'Multi-device sync.' },
					{ text: "AI-powered summarization (with limited access to Revornix's official models)." },
					{ text: "Section illustration generation (with limited access to Revornix's official models)." },
					{ text: "Revornix AI (with limited access to Revornix's official models)." },
					{ text: 'Overview of trending topics across major platforms.' },
					{ text: "Automatically push the day's trending topics and knowledge base summary (with limited access to Revornix's official models)." },
					{ text: 'API endpoint ingestion.', badge: '25 times / day' },
					{ text: 'MCP Client and MCP Server.' },
					{ text: "Automatically generate podcasts for sections/documents (with limited access to Revornix's official models)." },
					{ text: 'Section collaboration by multiple users.' },
				],
			},
			{
				name: 'Max Plan',
				prices: {
					CNY: 'CNY 299',
					USD: 'USD 88',
				},
				unit: '/Month',
				currencyLabel: 'Currency',
				buttonText: 'Subscribe',
				buttonHref: 'https://app.revornix.com/account/plan',
				features: [
					{ text: 'Capture links, files, and quick notes.' },
					{ text: 'RSS subscription.' },
					{ text: 'Document reading queue.' },
					{ text: 'Document/section knowledge graph.' },
					{ text: 'Multi-device sync.' },
					{ text: "AI-powered summarization (with broader access to Revornix's official model integration)." },
					{ text: "Section illustration generation (with broader access to Revornix's official model integration)." },
					{ text: "Revornix AI (with broader access to Revornix's official model integration)." },
					{ text: 'Overview of trending topics across major platforms.' },
					{ text: "Automatically push the day's trending topics and knowledge base summary (with broader access to Revornix's official model integration)." },
					{ text: 'API endpoint ingestion.', badge: '50 times / day' },
					{ text: 'MCP Client and MCP Server.' },
					{ text: "Automatically generate podcasts for sections/documents (with broader access to Revornix's official model integration)." },
					{ text: 'Section collaboration by multiple users.' },
				],
			},
			{
				name: 'Custom Plan',
				price: 'Custom',
				unit: '/Month',
				custom: true,
				description:
					'This plan is a custom plan. Please contact customer service for inquiries. Custom plans with a quota lower than the maximum are currently not supported.',
				buttonText: 'Contact Support',
				buttonHref: '/docs/contact',
			},
		],
	},
};

const PricingPlans = ({ lang }: { lang: Lang }) => {
	const content = contentMap[lang];
	const [currency, setCurrency] = useState<Currency>(lang === 'zh' ? 'CNY' : 'USD');

	const toggleCurrency = () => {
		setCurrency((prev) => (prev === 'CNY' ? 'USD' : 'CNY'));
	};

	return (
		<section className='mt-6'>
			<div className='rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-slate-900/50'>
				<div className='mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white'>
					<Info className='h-4 w-4' />
					<span>{content.warningTitle}</span>
				</div>
				<p className='text-sm leading-relaxed text-slate-600 dark:text-slate-300'>
					{content.warningText}
				</p>
			</div>

			<div className='mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
				{content.plans.map((plan) => (
					<article
						key={plan.name}
						className={`relative flex h-full flex-col rounded-2xl border bg-white/85 p-6 shadow-sm dark:bg-slate-900/70 ${
							plan.recommended
								? 'border-indigo-500 shadow-[0_10px_40px_-20px_rgba(79,70,229,0.6)]'
								: 'border-slate-200/80 dark:border-white/10'
						}`}>
						{plan.recommended && (
							<Badge className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-white'>
								<Star className='mr-1 h-3.5 w-3.5 fill-current' />
								{content.recommendedText}
							</Badge>
						)}

						<div className='flex items-start justify-between gap-3'>
							<h3 className='text-2xl font-semibold text-slate-900 dark:text-white'>
								{plan.name}
							</h3>
							{plan.currencyLabel && (
								<button
									type='button'
									onClick={toggleCurrency}
									className='rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-white/20 dark:text-slate-200 dark:hover:bg-slate-800/60'>
									{plan.currencyLabel}
									<span className='ml-1'>
										{currency === 'CNY' ? content.cnyText : content.usdText}
									</span>
								</button>
							)}
						</div>

						<div className='mt-4 flex items-end gap-1'>
							<p className='text-4xl font-bold tracking-tight text-slate-900 dark:text-white'>
								{plan.custom ? plan.price : plan.prices?.[currency]}
							</p>
							<p className='pb-1 text-xl text-slate-700 dark:text-slate-200'>
								{plan.unit}
							</p>
						</div>

						{plan.custom ? (
							<p className='mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200'>
								{plan.description}
							</p>
						) : (
							<ul className='mt-5 space-y-3'>
								{plan.features?.map((feature) => (
									<li key={feature.text} className='flex gap-2 text-sm'>
										<CircleCheckBig className='mt-0.5 h-4 w-4 shrink-0 text-slate-700 dark:text-slate-200' />
										<span className='text-slate-800 dark:text-slate-100'>
											{feature.text}
											{feature.badge && (
												<span className='ml-2 rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200'>
													{feature.badge}
												</span>
											)}
										</span>
									</li>
								))}
							</ul>
						)}

						<div className='mt-auto'>
							<Button asChild className='mt-8 w-full rounded-xl text-sm'>
								<Link href={plan.buttonHref}>{plan.buttonText}</Link>
							</Button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default PricingPlans;
