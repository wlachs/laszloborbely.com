import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Navbar from '../Navbar';

function Frame(props) {
  const { children } = props;
  return (
    <div className="container col-12 col-sm-12 m-0 m-sm-0 p-0 h-100">
      <Navbar />
      {children}
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.element,
};

Frame.defaultProps = {
  children: null,
};

export default Frame;
