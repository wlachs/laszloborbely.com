import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Login from '../components/Login';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { sendTokenRequest } from '../redux/actions/commonActions';
import Content from '../components/Content';

function AdminPageContent(props) {
  const { apiToken } = props;
  return (
    <Content>
      <div>
        <b>Admin token: </b>
      </div>
      <div className="small m-auto">
        {apiToken}
      </div>
    </Content>
  );
}

AdminPageContent.propTypes = {
  apiToken: PropTypes.string.isRequired,
};

function Admin(props) {
  const {
    error, loading, apiToken, sendTokenRequest_,
  } = props;

  return (
    <>
      {/* Page title */}
      <Helmet>
        <title>Laszlo Borbely | Admin</title>
      </Helmet>
      {/* Page header */}
      <h1>Admin</h1>
      {/* Page content */}
      {/* Error handling */}
      {
        error
          ? <Error what="Incorrect username or password!" />
          : null
      }
      {/* Display loading spinner */}
      {
        loading
          ? <Loading />
          : null
      }
      {/* Display page content */}
      {
        apiToken
          ? <AdminPageContent apiToken={apiToken} />
          : <Login callback={sendTokenRequest_} />
      }
    </>
  );
}

Admin.propTypes = {
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
