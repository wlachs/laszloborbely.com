import * as React from 'react';
import Frame from '../components/Frame';

export default function Welcome(props) {
    return (
        <Frame>
            <h1>MSc Student, Front-end & Back-end Developer</h1>
            <h2>Simple, minimalistic design.</h2>
            <h2>High-quality implementation.</h2>
            <img src='./assets/drawing.svg' className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-4'
                 alt='Drawing'/>
        </Frame>
    );
};
