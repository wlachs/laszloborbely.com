// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content';
import ContentRow from '../components/ContentRow/index.jsx';
import Frame from '../components/Frame';
import PureButton from '../components/PureButton/index.jsx';

// Config imports
import {pageTitleSuffix} from '../config.js';

function Contact() {
	const name = 'Contact';
	const pageTitle = name + pageTitleSuffix;

	return (
		<Frame>
			<Container>
				{/* Page title */}
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				{/* Page content */}
				<Content>
					<ContentRow center>
						<h1>Hey!</h1>
					</ContentRow>
					<ContentRow center>
						<h2>Feel free to send me a mail.</h2>
					</ContentRow>
					<ContentRow center>
						<a href='mailto:hello@laszloborbely.com'><PureButton>hello@laszloborbely.com</PureButton></a>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

export default Contact;
