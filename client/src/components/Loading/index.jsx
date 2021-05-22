// React imports
import React from 'react';
import './index.css';
import { Spinner } from 'react-bootstrap';

// Component imports
import ContentRow from '../ContentRow';

export default function Loading() {
  return (
    <ContentRow>
      <Spinner animation="border" className="spinner-body">
        <img
          src="/assets/logo.svg"
          className="spinner-logo"
          alt="logo"
        />
      </Spinner>
    </ContentRow>
  );
}
