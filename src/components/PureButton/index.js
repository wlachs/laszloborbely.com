import * as React from 'react';
import './index.css';

export default function PureButton(props) {
    return (
        <div className='button-link'>
            {props.children}
        </div>
    );
};
