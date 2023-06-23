// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';
import Drawing from '../components/Drawing';

// Config imports
import {pageTitlePrefix} from '../config.js';

function Welcome() {
	const name = 'Welcome';
	const pageTitle = pageTitlePrefix + name;

	return (
		<Container>
			{/* Page title */}
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			{/* Page content */}
			<Content>
				<ContentRow>
					<h1>László Borbély</h1>
				</ContentRow>
				<ContentRow>
					<h2>Full-Stack Software Engineer</h2>
				</ContentRow>
				<Container>
					<Drawing/>
				</Container>
			</Content>
		</Container>
	);
}

export default Welcome;
