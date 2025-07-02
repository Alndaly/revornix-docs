import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import weComCode from '@/static/contact_me_qr.png';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

const WeComCode = ({
	buttonStyle = 'link',
	className,
}: {
	buttonStyle?: string;
	className?: string;
}) => {
	const t = useTranslations();
	return (
		<Dialog>
			{buttonStyle === 'link' && (
				<DialogTrigger asChild>
					<Button
						variant='link'
						className={cn(
							'p-0 m-0 font-normal underline text-md hover:no-underline cursor-pointer decoration-from-font',
							className
						)}>
						{t('wecom')}
					</Button>
				</DialogTrigger>
			)}
			{buttonStyle === 'button' && (
				<DialogTrigger asChild>
					<Button variant={'secondary'} className={cn(className)}>
						{t('wecom')}
					</Button>
				</DialogTrigger>
			)}
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{t('wecom')}</DialogTitle>
					<DialogDescription>{t('wecom_tips')}</DialogDescription>
				</DialogHeader>
				<div className='flex justify-center items-center'>
					<Image
						src={weComCode}
						className='rounded'
						width={200}
						height={200}
						alt='wecom_code'
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default WeComCode;
