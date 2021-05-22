// React imports
import React from 'react';
import PropTypes from 'prop-types';

function ContentRow(props) {
  const { children } = props;
  return (
    <div className="col-12 d-flex flex-row justify-content-center align-items-center my-3">
      {/* Render row content */}
      {children}
    </div>
  );
}

ContentRow.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object, PropTypes.element, PropTypes.any],
  ),
};

ContentRow.defaultProps = {
  children: null,
};

export default ContentRow;
