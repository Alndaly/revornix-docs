import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Footer } from 'nextra-theme-docs';

const CustomFooter = () => {
	const t = useTranslations();
	return (
		<Footer className='flex flex-col text-sm gap-5'>
			<Link href='https://github.com/Qingyon-AI/Revornix'>
				{t('github_url')}
			</Link>
			<Link href='https://github.com/Qingyon-AI/Revornix/blob/develop/LICENSE'>
				{t('opensource_legal')}
			</Link>
			<Link href='https://huaqinda.notion.site/RoadMap-224bbdbfa03380fabd7beda0b0337ea3'>{t('roadmap')}</Link>
			<Link href='/blogs'>{t('blogs')}</Link>
			<p>
				© {new Date().getFullYear()}{' '}
				<Link href='https://qingyon.com'>{t('company')}</Link>
				{t('rights')}
			</p>
		</Footer>
	);
};

export default CustomFooter;
