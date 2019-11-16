import * as React from 'react';
import './index.css';

export default function Frame(props) {
    return (
        <div>
            Frame
            {props.children}
        </div>
    );
};
