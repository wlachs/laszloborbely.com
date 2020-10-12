// React imports
import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Component imports
import Content from '../components/Content';
import ContentRow from '../components/ContentRow';

// Config imports
import { pageTitlePrefix } from '../config';

function Welcome(props) {
  const { name } = props;
  const pageTitle = pageTitlePrefix + name;
  return (
    <Content>
      {/* Page title */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/* Page content */}
      <ContentRow>
        <h1>MSc Student, Full-Stack Developer</h1>
      </ContentRow>
      <ContentRow>
        <h2>Simple, high-quality solutions.</h2>
      </ContentRow>
      <ContentRow>
        <img
          src="/assets/drawing.svg"
          className="col-8 col-md-6 col-lg-4"
          alt="Drawing"
        />
      </ContentRow>
    </Content>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;
