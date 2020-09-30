import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../apollo/queries/project';
import Error from '../components/Error';
import Loading from '../components/Loading';

function ProjectBody(props) {
  const { loading, error, data } = props;
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return data.projects.map(
    (project) => (
      <ProjectCard
        link={project.pageLink}
        image={project.imageLink}
        name={project.name}
        description={project.description}
      />
    ),
  );
}

ProjectBody.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.any),
};

function Projects() {
  const { loading, error, data } = useQuery(PROJECTS);
  return (
    <>
      <h1>My recent work</h1>
      <h2>Check out my latest contributions.</h2>
      <div className="d-flex align-items-center mt-5 flex-column">
        <ProjectBody loading={loading} error={error} data={data} />
      </div>
    </>
  );
}

export default Projects;
