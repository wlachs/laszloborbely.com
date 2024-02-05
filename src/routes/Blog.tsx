import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { ErrorText } from '../components/ErrorText';
import { Frame } from '../components/Frame';
import { Posts } from '../components/Posts';
import { Spinner } from '../components/Spinner';
import { useGetPosts } from '../network/hooks';
import { getPageTitle } from '../utils/title';

export function Blog() {
	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{getPageTitle()}</title>
				</Helmet>
				{/* Page content */}
				<Content>
					<BlogContentHeader />
					<BlogContent />
				</Content>
			</Container>
		</Frame>
	);
}

function BlogContentHeader(): ReactElement {
	return (
		<ContentRow>
			<h1>Hi! I&apos;m László.</h1>
			<p>
				Feel free to check out my latest posts. Who knows, perhaps
				you&apos;ll find something interesting.
			</p>
		</ContentRow>
	);
}

function BlogContent(): ReactElement {
	const { data = [], isLoading } = useGetPosts();

	if (isLoading) {
		return (
			<ContentRow>
				<Spinner />
			</ContentRow>
		);
	}

	if (!data) {
		<ContentRow>
			<ErrorText center>
				Oh no, there was a problem loading the posts!
			</ErrorText>
		</ContentRow>;
	}

	return (
		<ContentRow>
			<Posts data={data} />
		</ContentRow>
	);
}
