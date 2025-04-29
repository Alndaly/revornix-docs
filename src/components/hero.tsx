import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import logo from '@/static/logo.png';
import { useTranslations } from 'next-intl';

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
					src={'/logo.dark.png'}
					alt='logo'
					width={250}
					height={250}
					className='hidden dark:block'
				/>
				<h1 className='font-bold text-7xl mb-5'>Revornix</h1>
				<p className='text-sm mb-5 text-muted-foreground italic border-l-5 pl-2'>
					{t('title_reason')}
				</p>
				<p className='font-bold'>{t('slogan')}</p>
			</div>
			<div className='flex flex-row items-center justify-center gap-5'>
				<Link href={'/docs/start'}>
					<Button variant='outline' className='shadow-none'>
						{t('documentation')}
					</Button>
				</Link>
				<Link href={'/blogs/background'}>
					<Button className='shadow-none'>{t('blogs')}</Button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
