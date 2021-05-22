// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Component imports
import Content from '../components/Content';
import ContentRow from '../components/ContentRow';

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
      <ContentRow>
        <h1>Oh no...</h1>
      </ContentRow>
      <ContentRow>
        <h2>The page you are looking for doesn&apos;t exist!</h2>
      </ContentRow>
    </Content>
  );
}

NotFound.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NotFound;
