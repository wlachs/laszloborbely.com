import React from 'react';
import './index.css';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <Spinner animation="border" className="spinner-body">
      <img
        src="/assets/logo.svg"
        className="spinner-logo"
        alt="logo"
      />
    </Spinner>
  );
}
