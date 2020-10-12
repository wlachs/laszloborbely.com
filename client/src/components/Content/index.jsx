import React from 'react';
import PropTypes from 'prop-types';

function Content(props) {
  const { children } = props;
  return (
    <div className="d-flex flex-column align-items-center m-auto">
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Content.defaultProps = {
  children: null,
};

export default Content;
