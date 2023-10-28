// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import Container from '../components/Container';
import Content from '../components/Content';
import ContentRow from '../components/ContentRow/index.jsx';
import Frame from '../components/Frame';

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
					<ContentRow>
						<h1>Contact</h1>
					</ContentRow>
					<ContentRow>
						<p>
							<h2>László Borbély</h2>
						</p>
						<p>
                            Full-Stack Software Engineer @ mgm technology partners
						</p>
						<p>
                            Mainly working with Spring and React, but always eager to learn new things! <br/>
                            Feel free to <a href='mailto:hello@laszloborbely.com'>send me an e-mail</a> if you have any questions, comments
                            or suggestions.
						</p>
					</ContentRow>
				</Content>
			</Container>
		</Frame>
	);
}

export default Contact;
