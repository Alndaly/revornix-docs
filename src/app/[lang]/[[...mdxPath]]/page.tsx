import { useMDXComponents } from '@/mdx-components';
import { generateStaticParamsFor, importPage } from 'nextra/pages';

export const generateStaticParams = generateStaticParamsFor('mdxPath');

export async function generateMetadata(props: PageProps) {
	const params = await props.params;
	const { metadata } = await importPage(params.mdxPath, params.lang);
	return metadata;
}

type PageProps = Readonly<{
	params: Promise<{
		mdxPath: string[];
		lang: string;
	}>;
}>;

const Wrapper = useMDXComponents().wrapper;

export default async function Page(props: PageProps) {
	const params = await props.params;
	const result = await importPage(params.mdxPath, params.lang);

	const { default: MDXContent, toc, metadata, sourceCode } = result;

	return (
		<div className='x:bg-nextra-bg'>
			<Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
				<MDXContent {...props} params={params} />
			</Wrapper>
		</div>
	);
}
