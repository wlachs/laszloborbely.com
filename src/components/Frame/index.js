import * as React from 'react';
import './index.css';
import Navbar from '../Navbar';

export default function Frame(props) {
    return (
        <div className='container col-12 col-sm-12 m-0 m-sm-0 p-0'>
            <Navbar {...props} />
            {props.children}
        </div>
    );
};
