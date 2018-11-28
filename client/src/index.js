import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Provider } from 'react-redux';
import store from './store.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // pass store object as a prop to Provider component which wraps around App Component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
// unregister method of the ServiceWorkerRegistration interface
// unregisters the service worker registration and returns a Promise.
// The promise will resolve to false if no registration was found, otherwise it resolves to true
