import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { NavLink } from 'react-router-dom';

function PureLink(props) {
  const { to, children } = props;
  return (
    <NavLink to={to} className="link" activeClassName="link_active">
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
