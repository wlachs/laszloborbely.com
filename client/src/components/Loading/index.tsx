// React imports
import React from 'react';
import './index.css';
import { Spinner } from 'react-bootstrap';

// Component imports
import ContentRow from '../ContentRow/index.jsx';

export default function Loading() {
  return (
    <ContentRow>
      <Spinner animation="border" className="spinner-body">
        <img
          src="/client/public/assets/logo.svg"
          className="spinner-logo"
          alt="logo"
        />
      </Spinner>
    </ContentRow>
  );
}
