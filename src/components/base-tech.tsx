import Link from 'next/link';

const BaseTech = () => {
	const techs = [
		{
			name: 'NextJS',
			href: 'https://nextjs.org/',
			description: 'Web前端框架',
		},
		{
			name: 'Tailwindcss',
			href: 'https://tailwindcss.com/',
			description: '前端CSS原子化框架',
		},
		{
			name: 'SwiftUI',
			href: 'https://nextjs.org/',
			description: 'iOS移动端UI框架',
		},
		{
			name: 'FastAPI',
			href: 'https://fastapi.tiangolo.com',
			description: '核心后端框架',
		},
		{
			name: 'Celery',
			href: 'https://docs.celeryq.dev/en/stable/',
			description: '服务端异步任务队列',
		},
		{
			name: 'Mysql',
			href: 'https://www.mysql.com',
			description: '常规数据库方案',
		},
		{
			name: 'Milvus',
			href: 'https://milvus.io',
			description: '向量数据库方案',
		},
		{
			name: 'Redis',
			href: 'https://redis.io',
			description: '缓存',
		},
		{
			name: 'Docker',
			href: 'https://www.docker.com',
			description: '打包部署容器化方案',
		},
		{
			name: 'Nginx',
			href: 'https://nginx.org',
			description: '反向代理',
		},
		{
			name: 'MinerU',
			href: 'https://mineru.net',
			description: '文件解析',
		},
		{
			name: 'DailyHot',
			href: 'https://github.com/imsyy/DailyHotApi',
			description: '热搜接口',
		},
	];
	return (
		<div>
			<h2 className='font-bold text-3xl text-center mb-10'>基础技术栈</h2>
			<div className='overflow-hidden w-full relative'>
				<div className='absolute top-0 left-0 h-full w-5 md:w-20 z-10 bg-linear-to-r from-[var(--x-color-nextra-bg)] to-none/0'></div>
				<div className='absolute top-0 right-0 h-full w-5 md:w-20 z-10 bg-linear-to-l from-[var(--x-color-nextra-bg)] to-none/0'></div>
				<div className='flex animate-scroll flex-row gap-5'>
					{techs.map((tech, index) => {
						return (
							<Link
								href={tech.href}
								key={index}
								className='rounded p-5 bg-black/5 dark:bg-white/5 min-w-80'>
								<h3 className='font-bold text-lg capitalize mb-2'>
									{tech.name}
								</h3>
								<p>{tech.description}</p>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BaseTech;
