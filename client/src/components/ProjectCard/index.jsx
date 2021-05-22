import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function ProjectCard(props) {
  const {
    link, image, name, description,
  } = props;

  return (
    <a href={link} className="project-card d-flex flex-row align-items-center p-2 mb-1">
      <img className="project-image" src={image} alt="project" />
      <div className="d-flex flex-column justify-content-start ml-3">
        <div className="project-name">{name}</div>
        <div className="project-description">{description}</div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  link: '#',
};

export default ProjectCard;
