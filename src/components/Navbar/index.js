import * as React from 'react';
import './index.css';
import PureLink from '../PureLink';
import {routes} from '../../routes';

function Links() {
    return routes.filter(route => route.display).map(Route => {
        return (
            <PureLink key={Route.id} to={Route.path}>
                <Route.nav>{Route.name}</Route.nav>
            </PureLink>
        );
    });
}

function CrossLink() {
    return (
        <PureLink to='/'>
            <img src='/assets/cross.svg' height='20' alt='Cross'/>
        </PureLink>
    );
}

export default function Navbar() {
    const path = window.location.pathname;

    if (path === '/') {
        return (
            <CommonNavbar>
                <div className='d-none d-lg-flex w-100 flex-row-reverse align-items-center'>
                    <Links/>
                </div>
                <button className="navbar-toggler d-block d-lg-none" type="button" data-toggle="collapse"
                        data-target="#middleMenu" aria-controls="middleMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <img src='./assets/burger.svg' height='20' alt='Hamburger menu'/>
                </button>
            </CommonNavbar>
        );
    } else {
        return (
            <CommonNavbar>
                <CrossLink/>
            </CommonNavbar>
        );
    }
};

function CommonNavbar(props) {
    return (
        <>
            <div className='col-12 col-lg-10 m-auto pt-4 d-flex justify-content-between align-items-center'>
                <div className='navbar-brand'>
                    <PureLink to='/'>
                        <img src='./assets/logo.svg' height='40'
                             className='navbar-logo'
                             alt='Laszlo Borbely | MSc Student, Front-end & Back-end Developer'/>
                    </PureLink>
                </div>
                {props.children}
            </div>
            <div id='middleMenu' className='collapse w-100 d-lg-none'>
                <div className='d-flex flex-column-reverse justify-content-center align-items-center'>
                    <Links/>
                </div>
            </div>
        </>
    );
}
