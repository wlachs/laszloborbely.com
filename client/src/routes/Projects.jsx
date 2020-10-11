import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { getProjectList } from '../redux/actions/projectActions';

function ProjectBody(props) {
  const { loading, error, data } = props;
  if (error) {
    return <Error what={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  return data.map(
    (project) => (
      <ProjectCard
        key={project.name}
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
  error: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.any),
};

function Projects(props) {
  const {
    loading, error, data, getProjectList_,
  } = props;

  useEffect(() => {
    getProjectList_();
  }, [getProjectList_]);

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

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  loading: PropTypes.bool,
  getProjectList_: PropTypes.func,
};

Projects.defaultProps = {
  data: [],
  error: null,
  loading: true,
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
