import * as React from 'react';
import './index.css';

export default function ProjectCard(props) {
    return (
        <a href={props.link} className='project-card d-flex flex-row align-items-center p-2'>
            <img className='project-image' src={props.image} alt='project'/>
            <div className='d-flex flex-column justify-content-start ml-3'>
                <div className='project-name'>{props.name}</div>
                <div className='project-description'>{props.description}</div>
            </div>
        </a>
    );
};
