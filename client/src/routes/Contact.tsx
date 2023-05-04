// React imports
import {Helmet} from 'react-helmet-async';

// Component imports
import PureButton from '../components/PureButton/index.jsx';
import Content from '../components/Content/index.jsx';
import ContentRow from '../components/ContentRow/index.jsx';

// Config imports
import {pageTitlePrefix} from '../config.js';

function Contact() {
    const name = "Contact";
    const pageTitle = pageTitlePrefix + name;

    return (
        <Content>
            {/* Page title */}
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            {/* Page content */}
            <ContentRow>
                <h1>Thanks for taking the time to reach out. </h1>
            </ContentRow>
            <ContentRow>
                <h2>Feel free to send me a mail.</h2>
            </ContentRow>
            <ContentRow>
                <a href="mailto:hello@laszloborbely.com"><PureButton>hello@laszloborbely.com</PureButton></a>
            </ContentRow>
        </Content>
    );
}

export default Contact;
