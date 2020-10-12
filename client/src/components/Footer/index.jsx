import React from 'react';
import './index.css';

function Footer() {
  return (
    <div className="bottom col-12 text-center">
      {process.env.REACT_APP_VERSION}
    </div>
  );
}

export default Footer;
