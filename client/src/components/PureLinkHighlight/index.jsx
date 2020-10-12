import React from 'react';
import { NavLink } from 'react-router-dom';
import PureLink from '../PureLink';

function PureLinkHighlight(props) {
  const { to, children } = props;
  return (
    <NavLink to={to} className="link" activeClassName="link_active">
      {children}
    </NavLink>
  );
}

PureLinkHighlight.propTypes = PureLink.propTypes;

export default PureLinkHighlight;
