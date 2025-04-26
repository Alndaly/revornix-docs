interface Feature {
	title: string;
	description: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
	return (
		<div className='rounded p-5 dark:bg-white/5 bg-black/5'>
			<h2 className='text-lg font-bold mb-2'>{feature.title}</h2>
			<p>{feature.description}</p>
		</div>
	);
};

const Features = () => {
	const features: Feature[] = [
		{
			title: '跨平台可用',
			description: '当前支持网页端，后续将会支持iOS端APP和微信小程序。',
		},
		{
			title: '一站资讯收集',
			description: '一站式资讯收集，包括新闻、博客、论坛等。',
		},
		{
			title: '自动化',
			description: '基于多模态大模型，将文件转化为Markdown格式。',
		},
		{
			title: '向量化存储',
			description:
				'我们使用行业top级别领先的milvus来作为向量存储库，支持向量搜索。',
		},
		{
			title: '本地化',
			description: '所有数据均存储在本地，无需担心数据泄露问题。',
		},
		{
			title: '开源可靠',
			description: '核心代码均开源，欢迎大家贡献代码。',
		},
	];
	return (
		<div>
			<h2 className='font-bold text-3xl text-center mb-10'>产品特性</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
				{features.map((feature, index) => {
					return <FeatureCard feature={feature} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Features;
