import {ReactNode, useState} from 'react';
import './index.css';
import Links from '../Links/index.jsx';
import PureLinkHighlight from '../PureLinkHighlight/index.jsx';

// Assets
import burger from '../../assets/burger.svg'
import logo from '../../assets/logo.svg'

function Navbar() {
    const [isExpanded, expand] = useState(false);

    return (
        <CommonNavbar isExpanded={isExpanded}>
            <div className="d-none d-lg-flex w-100 flex-row-reverse align-items-center">
                <Links/>
            </div>
            <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                onClick={() => expand(!isExpanded)}
                aria-label="Toggle navigation"
            >
                <img src={burger} height="20" alt="Hamburger menu"/>
            </button>
        </CommonNavbar>
    );
}

function MiddleMenu(props: {
    children?: ReactNode;
    isExpanded?: boolean;
}) {
    const {children, isExpanded} = props;
    if (isExpanded) {
        return (
            <div className="w-100 d-lg-none mb-5">
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

function CommonNavbar(props: {
    children?: ReactNode;
    isExpanded?: boolean;
}) {
    const {children, isExpanded} = props;

    return (
        <>
            <div className="col-12 col-lg-10 mx-auto px-1 mb-lg-5 d-flex justify-content-between align-items-center">
                <PureLinkHighlight to="/">
                    <img
                        src={logo}
                        height="40"
                        className="navbar-logo"
                        alt="Laszlo Borbely | MSc Student, Front-end & Back-end Developer"
                    />
                </PureLinkHighlight>
                {children}
            </div>
            <MiddleMenu isExpanded={isExpanded}>
                <div className="d-flex flex-column-reverse justify-content-center align-items-center">
                    <Links/>
                </div>
            </MiddleMenu>
        </>
    );
}

export default Navbar;
