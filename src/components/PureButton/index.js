import * as React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function PureButton(props) {
    return (
        <Link to={props.to} className='button-link link' onClick={props.onClick}>
            {props.children}
        </Link>
    );
};
