import { useTranslations } from 'next-intl';

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
	const t = useTranslations();
	const features: Feature[] = [
		{
			title: t('feature_1'),
			description: t('feature_1_tips'),
		},
		{
			title: t('feature_2'),
			description: t('feature_2_tips'),
		},
		{
			title: t('feature_3'),
			description: t('feature_3_tips'),
		},
		{
			title: t('feature_4'),
			description: t('feature_4_tips'),
		},
		{
			title: t('feature_5'),
			description: t('feature_5_tips'),
		},
		{
			title: t('feature_6'),
			description: t('feature_6_tips'),
		},
	];
	return (
		<div>
			<h2 className='font-bold text-3xl text-center mb-10'>{t('features')}</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
				{features.map((feature, index) => {
					return <FeatureCard feature={feature} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Features;
