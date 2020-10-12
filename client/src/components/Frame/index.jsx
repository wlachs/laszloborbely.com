import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Frame(props) {
  const { children } = props;
  return (
    <div className="container col-12 m-0 p-0 min-vh-100 py-4">
      <Navbar />
      {children}
      <Footer />
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
