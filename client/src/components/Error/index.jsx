import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Error(props) {
  const { what } = props;
  return (
    <>
      <h2>Error :(</h2>
      <code className="text-danger breadcrumb">{what.toString()}</code>
    </>
  );
}

Error.propTypes = {
  what: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.string]).isRequired,
};

export default Error;
