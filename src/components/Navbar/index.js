import * as React from 'react';
import {Link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className='col-lg-10 m-lg-auto pt-4 d-flex navbar navbar-expand-lg'>
            <div className='navbar-brand'>
                <Link to='/'>
                    <img src='./assets/logo.svg' height='50'
                         alt='Laszlo Borbely | MSc Student, Front-end & Back-end Developer'/>
                </Link>
            </div>
            <div className='navbar-menu d-none d-sm-none d-lg-flex w-100 flex-row-reverse align-items-center'>
                Projects
                Contact
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <img src='./assets/burger.svg' height='20' alt='Hamburger menu'/>
            </button>
        </div>
    );
};
