// React imports
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

// Component imports
import PureLink from '../PureLink';
import PureButton from '../PureButton';
import Content from '../Content';
import ContentRow from '../ContentRow';

function Error(props) {
  const { what, from, callback } = props;
  return (
    <Content>
      <ContentRow>
        <code className="text-danger breadcrumb">{what.toString()}</code>
      </ContentRow>
      {/* Back to previous view button */}
      {
        from
          ? <ContentRow><PureLink to={from}>Go back</PureLink></ContentRow>
          : null
      }
      {/* Reset button */}
      {
        callback
          ? <ContentRow><PureButton onClick={callback}>Reset</PureButton></ContentRow>
          : null
      }
    </Content>
  );
}

Error.propTypes = {
  what: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.string]).isRequired,
  from: PropTypes.string,
  callback: PropTypes.func,
};

Error.defaultProps = {
  from: null,
  callback: null,
};

export default Error;
