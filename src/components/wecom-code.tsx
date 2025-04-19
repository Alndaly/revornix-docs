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

const WeComCode = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant='link'
					className='p-0 m-0 font-normal underline text-md hover:no-underline cursor-pointer decoration-from-font text-blue-600'>
					企业微信
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>企业微信二维码</DialogTitle>
					<DialogDescription>
						你可以通过打开微信扫描下面的二维码来加入我们的交流群。
					</DialogDescription>
				</DialogHeader>
				<div className='flex justify-center items-center'>
					<Image
						src={'/contact_me_qr.png'}
						className='rounded'
						width={200}
						height={200}
						alt='企业微信二维码'
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default WeComCode;
