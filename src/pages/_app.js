import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'styles/globals.css';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'constants/config';

if (process.env.NODE_ENV !== 'development') {
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);
}

function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(() => {
          console.log('Service worker is registered!');
        });
      });
    }
  });

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default App;
