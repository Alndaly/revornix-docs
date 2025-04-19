import { Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import './globals.css';
import Image from 'next/image';
import CustomFooter from '@/components/footer';

export const metadata = {
	// Define your metadata here
	// For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
	<Navbar
		projectLink='https://github.com/Qingyon-AI/Revornix'
		chatIcon={
			<Image src={'/discord.svg'} alt='discord' width={30} height={30} />
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
					src={'/logo-dark.png'}
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
			// ... Your additional head options
			>
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				<Layout
					navbar={navbar}
					pageMap={await getPageMap()}
					feedback={{ content: null }}
					editLink={null}
					footer={<CustomFooter />}
					docsRepositoryBase='https://github.com/Qingyon-AI/Revornix'
					// ... Your additional layout options
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
