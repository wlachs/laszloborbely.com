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
import ContentRow from '../components/ContentRow';

// Config imports
import { getProjectList } from '../redux/actions/projectActions';
import { pageTitlePrefix } from '../config';

function ProjectList(props) {
  const { data } = props;
  return (
    <ContentRow>
      <div className="d-flex align-items-center flex-column">
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
    </ContentRow>
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
      <ContentRow>
        <h1>My recent work</h1>
      </ContentRow>
      <ContentRow>
        <h2>Check out my latest contributions.</h2>
      </ContentRow>
      {/* Error handling */}
      {
        error
          && <Error what="Failed to load projects!" />
      }
      {/* Display loading spinner */}
      {
        loading && data.length === 0
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
