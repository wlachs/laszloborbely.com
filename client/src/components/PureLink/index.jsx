import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function PureLink(props) {
  const { to, children } = props;
  return (
    <NavLink to={to} className="link">
      {children}
    </NavLink>
  );
}

PureLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.element, PropTypes.string],
  ).isRequired,
};

export default PureLink;
