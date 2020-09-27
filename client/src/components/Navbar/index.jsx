import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import PureLink from '../PureLink';
import Links from '../../routes/Links';

function Navbar() {
  return (
    <CommonNavbar>
      <div className="d-none d-lg-flex w-100 flex-row-reverse align-items-center">
        <Links />
      </div>
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#middleMenu"
        aria-controls="middleMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="./assets/burger.svg" height="20" alt="Hamburger menu" />
      </button>
    </CommonNavbar>
  );
}

function CommonNavbar(props) {
  const { children } = props;
  return (
    <>
      <div className="col-12 col-lg-10 m-auto pt-4 d-flex justify-content-between align-items-center">
        <PureLink to="/">
          <img
            src="./assets/logo.svg"
            height="40"
            className="navbar-logo"
            alt="Laszlo Borbely | MSc Student, Front-end & Back-end Developer"
          />
        </PureLink>
        {children}
      </div>
      <div id="middleMenu" className="collapse w-100 d-lg-none">
        <div className="d-flex flex-column-reverse justify-content-center align-items-center">
          <Links />
        </div>
      </div>
    </>
  );
}

CommonNavbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

CommonNavbar.defaultProps = {
  children: null,
};

export default Navbar;
