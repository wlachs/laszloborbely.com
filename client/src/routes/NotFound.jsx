// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Component imports
import Content from '../components/Content';

// Config imports
import { pageTitlePrefix } from '../config';

function NotFound(props) {
  const { name } = props;
  const pageTitle = pageTitlePrefix + name;
  return (
    <Content>
      {/* Page title */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/* Page content */}
      <h1>Oh no...</h1>
      <h2>The page you are looking for doesn&apos;t exist!</h2>
    </Content>
  );
}

NotFound.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NotFound;
