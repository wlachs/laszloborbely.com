// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Component imports
import PureButton from '../components/PureButton';
import Content from '../components/Content';

// Config imports
import { pageTitlePrefix } from '../config';

function Contact(props) {
  const { name } = props;
  const pageTitle = pageTitlePrefix + name;

  return (
    <Content>
      {/* Page title */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/* Page content */}
      <h1>Thanks for taking the time to reach out. </h1>
      <h2>Feel free to send me a mail.</h2>
      <div className="d-flex justify-content-center mt-5">
        <a href="mailto:hello@laszloborbely.com"><PureButton>hello@laszloborbely.com</PureButton></a>
      </div>
    </Content>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Contact;
