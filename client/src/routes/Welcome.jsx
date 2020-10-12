// React imports
import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Config imports
import { pageTitlePrefix } from '../config';
import Content from '../components/Content';

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
      <h1>MSc Student, Full-Stack Developer</h1>
      <h2>Simple, high-quality solutions.</h2>
      <img
        src="/assets/drawing.svg"
        className="col-8 col-md-6 col-lg-4 mt-4"
        alt="Drawing"
      />
    </Content>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Welcome;
