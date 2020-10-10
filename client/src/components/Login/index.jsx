import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Login(props) {
  const { callback } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="d-flex flex-column col-8 col-md-5 col-lg-4 col-xl-3 m-auto">
      <input
        id="email"
        type="email"
        placeholder="E-Mail"
        className="mb-2"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        className="mb-2"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        onClick={() => callback(email, password)}
      >
        Login
      </button>
    </div>
  );
}

Login.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Login;
