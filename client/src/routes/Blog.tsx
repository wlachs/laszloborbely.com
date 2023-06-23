// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';

// Config imports
import {pageTitlePrefix} from '../config.js';

// Assets
import drawing from '../assets/drawing.svg';

function Welcome() {
	const name = 'Blog';
	const pageTitle = pageTitlePrefix + name;

	return (
		<Content>
			{/* Page title */}
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			{/* Page content */}
			<ContentRow>
				<h1>Hey, this is my blog!</h1>
			</ContentRow>
			<ContentRow>
				<h2>Use the search field below to find an article you&apos;re interested in!</h2>
			</ContentRow>
			<Content>

			</Content>
		</Content>
	);
}

export default Welcome;
