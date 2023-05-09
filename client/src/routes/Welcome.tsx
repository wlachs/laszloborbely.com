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
	const name = 'Welcome';
	const pageTitle = pageTitlePrefix + name;

	return (
		<Content>
			{/* Page title */}
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			{/* Page content */}
			<ContentRow>
				<h1>László Borbély</h1>
			</ContentRow>
			<ContentRow>
				<h2>Full-Stack Software Engineer</h2>
			</ContentRow>
			<Content>
				<img
					src={drawing}
					className='col-8 col-md-6 col-lg-4 m-auto'
					alt='Drawing'
				/>
			</Content>
		</Content>
	);
}

export default Welcome;
