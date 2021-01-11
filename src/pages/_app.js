import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faTimes,
  faArrowCircleDown,
  faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Workbox } from 'workbox-window';
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'constants/config';

library.add(faArrowCircleDown, faArrowCircleUp, faSearch, faTimes);
if (process.env.NODE_ENV !== 'development') {
  ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);
}

function App({ Component, pageProps }) {
  useEffect(() => {
    if (
      !('serviceWorker' in navigator) ||
      process.env.NODE_ENV !== 'production'
    ) {
      console.warn('Pwa support is disabled');
      return;
    }

    const wb = new Workbox('sw.js', { scope: '/' });
    wb.register();
  }, []);

  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default App;
