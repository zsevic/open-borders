import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="info" role="status">
        <span className="sr-only">Učitavaju se podaci...</span>
      </Spinner>
    </div>
  );
}
