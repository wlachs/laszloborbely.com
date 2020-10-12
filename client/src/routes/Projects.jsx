// React imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// Component imports
import ProjectCard from '../components/ProjectCard';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Content from '../components/Content';

// Config imports
import { getProjectList } from '../redux/actions/projectActions';
import { pageTitlePrefix } from '../config';

function ProjectList(props) {
  const { data } = props;
  return (
    <div className="d-flex align-items-center mt-5 flex-column">
      {/* Render project list */}
      {
        data.map((project) => (
          <ProjectCard
            key={project.name}
            link={project.pageLink}
            image={project.imageLink}
            name={project.name}
            description={project.description}
          />
        ))
      }
    </div>
  );
}

ProjectList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

function Projects(props) {
  const {
    name, loading, error, data, getProjectList_,
  } = props;
  const pageTitle = pageTitlePrefix + name;

  useEffect(() => {
    getProjectList_();
  }, [getProjectList_]);

  return (
    <Content>
      {/* Page title */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/* Page header */}
      <h1>My recent work</h1>
      <h2>Check out my latest contributions.</h2>
      {/* Error handling */}
      {
        error
          && <Error what="Failed to load projects!" />
      }
      {/* Display loading spinner */}
      {
        loading && !data
          && <Loading />
      }
      {/* Display page content */}
      {
        data
          && <ProjectList data={data} />
      }
    </Content>
  );
}

Projects.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool,
  getProjectList_: PropTypes.func,
};

Projects.defaultProps = {
  data: [],
  error: null,
  loading: false,
  getProjectList_: () => ({}),
};

function mapStateToProps(state) {
  return {
    data: state.projects.projectList,
    error: state.projects.error,
    loading: state.projects.loading,
  };
}

const mapDispatchToProps = {
  getProjectList_: getProjectList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
