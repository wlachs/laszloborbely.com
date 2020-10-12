// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Redux imports
import { connect } from 'react-redux';
import { sendTokenRequest } from '../redux/actions/commonActions';

// Component imports
import Login from '../components/Login';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Content from '../components/Content';

// Config imports
import { pageTitlePrefix } from '../config';

function AdminPageContent(props) {
  const { apiToken } = props;
  return (
    <>
      <div>
        <b>Admin token: </b>
      </div>
      <div className="small m-auto">
        {apiToken}
      </div>
    </>
  );
}

AdminPageContent.propTypes = {
  apiToken: PropTypes.string.isRequired,
};

function Admin(props) {
  const {
    name, error, loading, apiToken, sendTokenRequest_,
  } = props;
  const pageTitle = pageTitlePrefix + name;

  return (
    <Content>
      {/* Page title */}
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {/* Page header */}
      <h1>Admin</h1>
      {/* Error handling */}
      {
          error
            && <Error what="Incorrect username or password!" />
        }
      {/* Display loading spinner */}
      {
          loading
            && <Loading />
        }
      {/* Display page content */}
      {
          apiToken
            ? <AdminPageContent apiToken={apiToken} />
            : <Login callback={sendTokenRequest_} />
        }
    </Content>
  );
}

Admin.propTypes = {
  name: PropTypes.string.isRequired,
  apiToken: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  sendTokenRequest_: PropTypes.func,
};

Admin.defaultProps = {
  apiToken: null,
  error: null,
  loading: true,
  sendTokenRequest_: null,
};

function mapStateToProps(state) {
  return {
    apiToken: state.common.apiToken,
    error: state.common.error,
    loading: state.common.loading,
  };
}

const mapDispatchToProps = {
  sendTokenRequest_: sendTokenRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
