import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { guestClient } from './apollo';
import Router from './router';
import 'typeface-roboto';
import './components/global.css';

ReactDOM.render(
  <ApolloProvider client={guestClient()}>
    <Router />
  </ApolloProvider>,
  document.getElementById('root'),
);
