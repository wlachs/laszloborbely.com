import * as React from 'react';
import Frame from '../components/Frame';
import PureButton from '../components/PureButton';

export default function Contact(props) {
    return (
        <Frame>
            <h1>Thanks for taking the time to reach out. </h1>
            <h2>Feel free to send me a mail.</h2>
            <div className='d-flex justify-content-center mt-5'>
                <a href='mailto:hello@laszloborbely.com'><PureButton>hello@laszloborbely.com</PureButton></a>
            </div>
        </Frame>
    );
};
