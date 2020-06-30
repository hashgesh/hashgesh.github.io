import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import '../styles/index.scss';

import App from './containers/App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import marqAppReducer from './reducers';

const appStore = createStore(
  marqAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

ReactDOM.render(
  <Provider store={appStore}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
