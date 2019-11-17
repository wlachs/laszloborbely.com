import * as React from 'react';
import './index.css';

export default function ProjectCard(props) {
    return (
        <a className='project-card d-flex flex-column justify-content-around align-items-center' href={props.link}>
            <img src={props.image} alt='project image' height='100px'/>
            {props.children}
        </a>
    );
};
