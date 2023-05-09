// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';

// Config imports
import {pageTitlePrefix} from '../config.js';

function NotFound(props: {
	name: string;
}) {
	const {name} = props;
	const pageTitle = pageTitlePrefix + name;
	return (
		<Content>
			{/* Page title */}
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			{/* Page content */}
			<ContentRow>
				<h1>Oh no...</h1>
			</ContentRow>
			<ContentRow>
				<h2>The page you are looking for doesn&apos;t exist!</h2>
			</ContentRow>
		</Content>
	);
}

export default NotFound;
