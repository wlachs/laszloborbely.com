import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Links from '../../routes/Links';
import PureLinkHighlight from '../PureLinkHighlight';

function Navbar() {
  const [isExpanded, expand] = useState(false);

  return (
    <CommonNavbar isExpanded={isExpanded}>
      <div className="d-none d-lg-flex w-100 flex-row-reverse align-items-center">
        <Links />
      </div>
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        onClick={() => expand(!isExpanded)}
        aria-label="Toggle navigation"
      >
        <img src="/assets/burger.svg" height="20" alt="Hamburger menu" />
      </button>
    </CommonNavbar>
  );
}

function MiddleMenu(props) {
  const { children, isExpanded } = props;
  if (isExpanded) {
    return (
      <div className="w-100 d-lg-none">
        {children}
      </div>
    );
  }
  return (
    <div className="collapse w-100 d-lg-none">
      {children}
    </div>
  );
}

MiddleMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  isExpanded: PropTypes.bool,
};

MiddleMenu.defaultProps = {
  children: null,
  isExpanded: false,
};

function CommonNavbar(props) {
  const { children, isExpanded } = props;

  return (
    <>
      <div className="col-12 col-lg-10 m-auto d-flex justify-content-between align-items-center">
        <PureLinkHighlight to="/">
          <img
            src="/assets/logo.svg"
            height="40"
            className="navbar-logo"
            alt="Laszlo Borbely | MSc Student, Front-end & Back-end Developer"
          />
        </PureLinkHighlight>
        {children}
      </div>
      <MiddleMenu isExpanded={isExpanded}>
        <div className="d-flex flex-column-reverse justify-content-center align-items-center">
          <Links />
        </div>
      </MiddleMenu>
    </>
  );
}

CommonNavbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  isExpanded: PropTypes.bool,
};

CommonNavbar.defaultProps = {
  children: null,
  isExpanded: false,
};

export default Navbar;
