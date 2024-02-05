import { Helmet } from 'react-helmet-async';

import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { ContentRow } from '../components/ContentRow';
import { Frame } from '../components/Frame';
import { pageTitleSuffix } from '../config';

export function NotFound() {
	const name = '404';
	const pageTitle = [name, pageTitleSuffix].join(' | ');
	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				{/* Page content */}
				<Content>
					<ContentRow>
						<h1>Oh no...</h1>
					</ContentRow>
					<ContentRow>
						<h2>
							The page you are looking for doesn&apos;t exist!
						</h2>
					</ContentRow>
					<ContentRow>
						<p>
							<i>Finger weg, Clemens!</i>
						</p>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}
