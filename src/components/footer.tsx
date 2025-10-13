import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Footer } from 'nextra-theme-docs';

const CustomFooter = () => {
	const t = useTranslations();
	return (
		<Footer className='grid grid-cols-1 md:grid-cols-2 gap-5'>
			<div className='flex flex-col text-sm gap-5'>
				<Link href='https://github.com/Qingyon-AI/Revornix' target={'_blank'}>
					{t('github_url')}
				</Link>
				<Link
					href='https://github.com/Qingyon-AI/Revornix/blob/develop/LICENSE'
					target={'_blank'}>
					{t('opensource_legal')}
				</Link>
				<Link
					href='https://huaqinda.notion.site/RoadMap-224bbdbfa03380fabd7beda0b0337ea3'
					target={'_blank'}>
					{t('roadmap')}
				</Link>
				<Link href='/blogs'>{t('blogs')}</Link>
				<p>
					© {new Date().getFullYear()}{' '}
					<Link href='https://qingyon.com'>{t('company')}</Link>
					{t('rights')}
				</p>
			</div>
			<div className='flex flex-col text-sm gap-5'>
				<Link
					href='https://github.com/Qingyon-AI/Revornix-Npm-Lib'
					target={'_blank'}>
					{t('system_eco_npm')}
				</Link>
				<Link
					href='https://github.com/Qingyon-AI/Revornix-Python-Lib'
					target={'_blank'}>
					{t('system_eco_pip')}
				</Link>
				<Link
					href='https://github.com/Qingyon-AI/Revornix-Chrome-Extension'
					target={'_blank'}>
					{t('system_eco_chrome_plugin')}
				</Link>
			</div>
		</Footer>
	);
};

export default CustomFooter;
