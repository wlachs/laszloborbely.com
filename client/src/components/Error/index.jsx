import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import PureLink from '../PureLink';
import PureButton from '../PureButton';
import Content from '../Content';

function Error(props) {
  const { what, from, callback } = props;
  return (
    <Content>
      <code className="text-danger breadcrumb">{what.toString()}</code>
      {/* Back to previous view button */}
      {
        from
          ? <PureLink to={from}>Go back</PureLink>
          : null
      }
      {/* Reset button */}
      {
        callback
          ? <PureButton onClick={callback}>Reset</PureButton>
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
