import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import logo from '@/static/logo.png';
import logoDark from '@/static/logo.dark.png';
import { useTranslations } from 'next-intl';
import WeComCode from './wecom-code';

const Hero = () => {
	const t = useTranslations();
	return (
		<div className='mb-10'>
			<div className='flex flex-col items-center justify-center my-10'>
				<Image
					src={logo}
					alt='logo'
					width={200}
					height={200}
					className='dark:hidden'
				/>
				<Image
					src={logoDark}
					alt='logo'
					width={250}
					height={250}
					className='hidden dark:block'
				/>
				<h1 className='font-bold text-7xl mb-10'>Revornix</h1>
				<p className='max-w-[75ch]'>{t('slogan')}</p>
			</div>
			<div className='flex flex-row items-center justify-center gap-5'>
				<WeComCode buttonStyle='button' />
				<Link href={'/docs/start'}>
					<Button variant='outline' className='shadow-none'>
						{t('documentation')}
					</Button>
				</Link>
				<Link href={'/blogs'}>
					<Button className='shadow-none'>{t('blogs')}</Button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
