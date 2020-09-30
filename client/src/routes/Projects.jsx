import * as React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <>
      <h1>My recent work</h1>
      <h2>Check out my latest contributions.</h2>
      <div className="d-flex align-items-center mt-5 flex-column">
        <ProjectCard
          link="https://swofi.net"
          image="./assets/swofi.png"
          description="Scientific Workflow Guide."
          name="SWOFI"
        />
        <ProjectCard
          link="https://swofi.net:30012"
          image="./assets/literature.png"
          description="A lightweight tool for managing scientific publications."
          name="Literature Wizard"
        />
      </div>
    </>
  );
}
