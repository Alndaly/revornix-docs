import Link from 'next/link';
import { Footer } from 'nextra-theme-docs';

const CustomFooter = () => {
	return (
		<Footer className='flex flex-col text-sm gap-5'>
			<Link href='https://github.com/Qingyon-AI/Revornix'>项目Github地址</Link>
			<Link href='https://github.com/Qingyon-AI/Revornix/blob/develop/LICENSE'>
				开源协议
			</Link>
			<Link href='/blogs/background'>
				博客动态
			</Link>
			<p>
				© {new Date().getFullYear()}{' '}
				<Link href='https://qingyon.com'>清韵科技（绍兴）有限公司</Link>
				版权所有
			</p>
		</Footer>
	);
};

export default CustomFooter;
