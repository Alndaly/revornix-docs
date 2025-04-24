import { Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import './globals.css';
import Image from 'next/image';
import CustomFooter from '@/components/footer';
import MineGoogleAnalytics from '@/components/mine-google-analystic';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
	// Define your metadata here
	// For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
	description: 'AI时代的资讯管理工具',
	metadataBase: new URL('https://revornix.com'),
	keywords: ['Revornix', 'AI', 'Notes', 'Markdown'],
	applicationName: 'Revornix',
	appleWebApp: {
		title: 'Revornix',
	},
	title: {
		default: 'Revornix – AI时代的资讯管理工具',
		template: '%s | Revornix',
	},
	openGraph: {
		// https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
		url: './',
		siteName: 'Revornix',
		locale: 'zh_CN',
		type: 'website',
	},
	twitter: {
		site: 'https://revornix.com',
	},
	alternates: {
		// https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
		canonical: './',
	},
};

const navbar = (
	<Navbar
		projectLink='https://github.com/Qingyon-AI/Revornix'
		chatIcon={
			<>
				<Image
					src={'/discord.svg'}
					alt='discord'
					width={30}
					height={30}
					className='dark:hidden'
				/>
				<Image
					src={'/discord.dark.svg'}
					alt='discord'
					width={30}
					height={30}
					className='hidden dark:block'
				/>
			</>
		}
		chatLink='https://discord.gg/3XZfz84aPN'
		logo={
			<div className='flex flex-row items-center gap-2'>
				<Image
					className='dark:hidden block'
					src={'/logo.png'}
					alt='logo'
					width={20}
					height={20}
				/>
				<Image
					className='hidden dark:block'
					src={'/logo.dark.png'}
					alt='logo'
					width={20}
					height={20}
				/>
				<p className='font-bold'>Revornix</p>
			</div>
		}
	/>
);

export default async function RootLayout({ children }) {
	return (
		<html
			// Required to be set
			dir='ltr'
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning>
			<Head
				color={{
					hue: {
						dark: 204,
						light: 212,
					},
					saturation: 100,
					lightness: {
						light: 45,
						dark: 55,
					},
				}}>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				<GoogleAnalytics gaId='G-MMTX35WR5M' />
				<Layout
					navbar={navbar}
					pageMap={await getPageMap()}
					feedback={{ content: null }}
					editLink={null}
					footer={<CustomFooter />}
					docsRepositoryBase='https://github.com/Qingyon-AI/Revornix'>
					{children}
				</Layout>
			</body>
		</html>
	);
}
