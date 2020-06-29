import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import '../styles/index.scss';

import App from './containers/App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import marqAppReducer from './reducers';

const appStore = createStore(
  marqAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('MODE: ', process.env.NODE_ENV);

ReactDOM.render(
  <Provider store={appStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);