// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Container from '../components/Container';
import PureButton from '../components/PureButton/index.jsx';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';

// Config imports
import {pageTitlePrefix} from '../config.js';
import Frame from '../components/Frame';

function Contact() {
	const name = 'Contact';
	const pageTitle = pageTitlePrefix + name;

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
						<h1>Thanks for taking the time to reach out. </h1>
					</ContentRow>
					<ContentRow>
						<h2>Feel free to send me a mail.</h2>
					</ContentRow>
					<ContentRow>
						<a href='mailto:hello@laszloborbely.com'><PureButton>hello@laszloborbely.com</PureButton></a>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

export default Contact;
