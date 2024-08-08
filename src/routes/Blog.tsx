import { useInfiniteQuery } from '@tanstack/react-query';
import { ReactElement, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { ErrorText } from '../components/ErrorText';
import { Frame } from '../components/Frame';
import { Posts } from '../components/Posts';
import { Spinner } from '../components/Spinner';
import { postsQueryOptions } from '../network/queryOptions';
import { BlogPostData } from '../network/types/blog.ts';
import { getPageTitle } from '../utils/title';

export function Blog(): ReactElement {
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
			<h1>Hi, welcome to my blog!</h1>
			<p>
				Feel free to check out my latest posts. Who knows, perhaps
				you&apos;ll find something interesting.
			</p>
		</ContentRow>
	);
}

function BlogContent(): ReactElement {
	const { data, isLoading, fetchNextPage } =
		useInfiniteQuery(postsQueryOptions());

	const fetchNextPageIfBottomIsVisible = (): void => {
		if (
			window.innerHeight + Math.round(window.scrollY) >=
			document.body.offsetHeight
		) {
			fetchNextPage().then();
		}
	};

	window.onscroll = fetchNextPageIfBottomIsVisible;
	useEffect(fetchNextPageIfBottomIsVisible);

	if (isLoading) {
		return (
			<ContentRow>
				<Spinner />
			</ContentRow>
		);
	}

	if (!data || !data.pages) {
		return (
			<ContentRow>
				<ErrorText center>
					Oh no, there was a problem loading the posts!
				</ErrorText>
			</ContentRow>
		);
	}

	const allData = data.pages.reduce(
		(acc, d) => acc.concat(d.posts),
		[] as BlogPostData[],
	);

	return (
		<ContentRow>
			<Posts data={allData} />
		</ContentRow>
	);
}
