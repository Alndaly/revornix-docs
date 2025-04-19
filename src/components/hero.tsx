import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className='mb-10'>
			<div className='flex flex-col items-center justify-center my-10'>
				<Image
					src={'/logo-1.png'}
					alt='logo'
					width={250}
					height={250}
					className='dark:hidden'
				/>
				<Image
					src={'/logo-1-dark.png'}
					alt='logo'
					width={250}
					height={250}
					className='hidden dark:block'
				/>
				<h1 className='font-bold text-7xl mb-5'>Revornix</h1>
				<p className='text-sm mb-5 text-muted-foreground italic border-l-5 pl-2'>
					当我起名的时候，我联想到的是这个碎片化的时代，以及如何要在这个时代中发展自己。于是结合了「重生Rebirth」与「漩涡Vortex」之意，寓意在碎片中涅槃重生。
				</p>
				<p className='font-bold'>
					AI时代的资讯管理工具。Revornix可以帮助你便捷整合所有可见资讯，并在特定时间给你一份完整的报告。
				</p>
			</div>
			<div className='flex flex-row items-center justify-center gap-5'>
				<Link href={'/docs'}>
					<Button variant='outline' className='shadow-none'>
						使用文档
					</Button>
				</Link>
				<Link href={'/blogs'}>
					<Button className='shadow-none'>产品日志</Button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
