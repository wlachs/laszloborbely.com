import * as React from 'react';
import './index.css';

export default function ProjectCard(props) {
    return (
        <div className='project-card d-flex flex-row justify-content-around align-items-center'>
            <a href={props.link}><img src={props.image} alt='project' height='100px'/></a>
            <div className='d-flex flex-column justify-content-around h-100 p-2'>
                <div className='project-name'>{props.name}</div>
                <div className='project-description'>{props.description}</div>
            </div>
        </div>
    );
};
