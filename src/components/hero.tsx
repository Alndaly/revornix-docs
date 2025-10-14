import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { MegaphoneIcon, Sparkles, ArrowRight } from 'lucide-react';

import { Button } from './ui/button';
import { Badge } from './ui/badge';
import WeComCode from './wecom-code';

const Hero = () => {
	const t = useTranslations();

	const highlights = [
		{
			title: t('main_feature_1'),
			description: t('main_feature_1_description'),
		},
		{
			title: t('main_feature_2'),
			description: t('main_feature_2_description'),
		},
		{
			title: t('main_feature_3'),
			description: t('main_feature_3_description'),
		},
	];

	return (
		<section className='mt-12'>
			<Link
				href='https://github.com/Qingyon-AI/Revornix/releases'
				target={'_blank'}
				className='w-fit'>
				<Badge
					className='flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium border-blue-500 mb-5 whitespace-break-spaces'
					variant={'outline'}>
					<MegaphoneIcon className='h-4 w-4 shrink-0' />
					<span>{t('latest_news')}</span>
				</Badge>
			</Link>

			<div className='space-y-6 mb-10'>
				<h1 className='text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
					{t('main_slog')}
				</h1>
				<p className='text-lg leading-relaxed sm:text-xl dark:text-slate-100/80'>
					{t('sub_slog')}
				</p>
			</div>

			<div className='flex flex-wrap items-center gap-4 mb-10'>
				<Button className='rounded-full'>
					<Link href='/blogs' className='flex items-center gap-2 text-sm'>
						{t('blogs')}
						<ArrowRight className='h-4 w-4' />
					</Link>
				</Button>
				<Button
					asChild
					variant='outline'
					className='rounded-full border-slate-300 bg-white/60 text-base font-semibold text-slate-700 backdrop-blur-sm transition hover:border-slate-400 hover:bg-white dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:bg-white/10'>
					<Link href='/docs/start' className='text-sm'>
						{t('documentation')}
					</Link>
				</Button>
				<WeComCode
					buttonStyle='button'
					className='rounded-full border-0 bg-white text-sm font-semibold text-slate-700 shadow-[0_10px_30px_-18px_rgba(14,116,220,0.6)] transition hover:translate-y-[1px] hover:bg-slate-50 dark:bg-white/15 dark:text-white dark:hover:bg-white/25'
				/>
			</div>

			<ul className='grid gap-4 grid-cols-1 md:grid-cols-3 mb-10'>
				{highlights.map((item, index) => (
					<li
						key={index}
						className='group relative overflow-hidden rounded-2xl border border-sky-100/80 bg-white/70 p-5 shadow-[0_15px_50px_-35px_rgba(14,116,220,0.45)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:shadow-[0_15px_40px_-30px_rgba(14,165,233,0.4)]'>
						<div className='absolute right-4 top-4'>
							<Sparkles className='h-5 w-5 text-sky-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 dark:text-sky-300' />
						</div>
						<p className='text-base font-semibold text-slate-900 dark:text-white'>
							{item.title}
						</p>
						<p className='mt-2 text-sm text-slate-600 dark:text-slate-100/70'>
							{item.description}
						</p>
					</li>
				))}
			</ul>

			<div className='relative flex items-center justify-center'>
				<div className='relative w-full overflow-hidden rounded-lg border border-slate-200 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60'>
					<div className='relative aspect-[16/9] w-full'>
						<img
							src='https://qingyon-revornix-public.oss-cn-beijing.aliyuncs.com/images/20251011141251012.png'
							alt='Revornix 产品界面预览'
							className='absolute inset-0 h-full w-full object-cover'
						/>
					</div>
					<div className='border-t border-slate-200/80 bg-gradient-to-t from-white via-white/70 to-transparent p-6 text-sm text-slate-600 dark:border-white/10 dark:bg-gradient-to-t dark:from-slate-900/90 dark:via-slate-900/40 dark:text-slate-100/70'>
						<p>{t('dashboard_description')}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
