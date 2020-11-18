import React from 'react';
import PropTypes from 'prop-types';

function Content(props) {
  const { children } = props;
  return (
    <div className="d-flex flex-column align-items-center h-100 w-100 flex-grow-1">
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object, PropTypes.element, PropTypes.any],
  ),
};

Content.defaultProps = {
  children: null,
};

export default Content;
