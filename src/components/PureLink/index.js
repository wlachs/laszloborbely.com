import * as React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function PureLink(props) {
    return (
        <Link to={props.to} className='link'>
            {props.children}
        </Link>
    );
};
