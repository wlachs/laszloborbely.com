import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { sendTokenRequest } from '../redux/actions/commonActions';

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
    error, loading, apiToken, sendTokenRequest_,
  } = props;

  const PageTitle = () => <h1>Admin</h1>;
  const PageContent = () => {
    if (error) {
      return <Error what="Incorrect username or password!" />;
    }
    if (loading) {
      return <Loading />;
    }
    if (apiToken) {
      return (
        <AdminPageContent apiToken={apiToken} />
      );
    }
    return <Login callback={sendTokenRequest_} />;
  };

  return (
    <>
      <PageTitle />
      <div className="d-flex flex-column align-items-center m-auto">
        <PageContent />
      </div>
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
  sendTokenRequest_: () => ({}),
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
