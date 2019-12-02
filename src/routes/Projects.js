import * as React from 'react';
import Frame from '../components/Frame';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
        <Frame>
            <h1>My recent work</h1>
            <h2>Check out my latest projects.</h2>
            <div className='d-flex justify-content-center mt-5'>
                <ProjectCard link='https://literature.laszloborbely.com' image='./assets/literature.png'
                             description='A lightweight tool for managing scientific publications.'
                             name='Literature Wizard'/>
            </div>
        </Frame>
    );
};
