import { useQuery } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { ErrorText } from '../components/ErrorText';
import { Frame } from '../components/Frame';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { PostMetadata } from '../components/PostMetadata';
import { Spinner } from '../components/Spinner';
import { postQueryOptions } from '../network/queryOptions';
import { getPageTitle } from '../utils/title';

export function BlogPost(): ReactElement {
	const { postId = '' } = useParams();
	const { data } = useQuery(postQueryOptions(postId));

	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{getPageTitle(data?.title)}</title>
				</Helmet>
				{/* Page content */}
				<Content>
					<BlogPostContent />
				</Content>
			</Container>
		</Frame>
	);
}

function BlogPostContent(): ReactElement {
	const { postId = '' } = useParams();
	const { data, isLoading } = useQuery(postQueryOptions(postId));

	if (isLoading) {
		return (
			<ContentRow>
				<Spinner />
			</ContentRow>
		);
	}

	if (!data) {
		return (
			<ContentRow>
				<ErrorText center>
					Oh no, the post you are trying to load is not available!
				</ErrorText>
			</ContentRow>
		);
	}

	return (
		<>
			<ContentRow>
				<PostMetadata post={data} />
			</ContentRow>
			<ContentRow>
				<MarkdownRenderer content={data.body} />
			</ContentRow>
		</>
	);
}
