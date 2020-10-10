import React, { useState } from 'react';
import axios from 'axios';
import Login from '../components/Login';
import getCurrentConfiguration, { authEndpoint } from '../config';
import Error from '../components/Error';
import Loading from '../components/Loading';

async function authRequest(email, password) {
  /* Get configuration */
  const configuration = getCurrentConfiguration();

  /* Get url */
  const url = configuration.serverUri + authEndpoint;

  /* Send request */
  return axios.post(url, {
    email,
    password,
  });
}

function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('');

  const handleAuth = (email, password) => {
    setLoading(true);
    authRequest(email, password)
      .then((t) => {
        setToken(t.data.token);
        setLoggedIn(true);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  const PageTitle = () => <h1>Admin</h1>;
  const PageContent = () => {
    if (error) {
      return <Error what="Incorrect username or password!" />;
    }
    if (loading) {
      return <Loading />;
    }
    if (loggedIn) {
      return <div>{token}</div>;
    }
    return <Login callback={handleAuth} />;
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

export default Admin;
