import * as React from 'react';
import './index.css';
import PureLink from '../PureLink';
import {routes} from '../../routes';

export default function Navbar(props) {
    const path = window.location.pathname;

    const crossLink =
        <PureLink to='/'>
            <img src='/assets/cross.svg' height='20' alt='Cross'/>
        </PureLink>;

    const links = routes.filter(route => route.display).map(route => {
        return <PureLink key={route.id} to={route.path}>
            <route.nav>{route.name}</route.nav>
        </PureLink>;

    });

    if (path === '/') {
        return (
            <CommonNavbar>
                <div className='navbar-menu d-none d-lg-flex w-100 flex-row-reverse align-items-center'>
                    {links}
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#middleMenu" aria-controls="middleMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <img src='./assets/burger.svg' height='20' alt='Hamburger menu'/>
                </button>
                <div id='middleMenu' className='collapse w-100 d-lg-none'>
                    <div className='d-flex flex-column-reverse justify-content-center align-items-center'>
                        {links}
                    </div>
                </div>
            </CommonNavbar>
        );
    } else {
        return (
            <CommonNavbar>
                <div className='navbar-menu d-none d-lg-flex w-100'/>
                {crossLink}
            </CommonNavbar>
        );
    }
};

function CommonNavbar(props) {
    return (
        <div className='col-lg-10 m-lg-auto pt-4 d-flex navbar navbar-expand-lg'>
            <div className='navbar-brand'>
                <PureLink to='/'>
                    <img src='./assets/logo.svg' height='50'
                         alt='Laszlo Borbely | MSc Student, Front-end & Back-end Developer'/>
                </PureLink>
            </div>
            {props.children}
        </div>
    );
}
