import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import '../styles/index.scss';

import App from './containers/App';

import marqAppReducer from './reducers';

const appStore = createStore(
  marqAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = createBrowserHistory();

ReactGA.initialize('UA-108070842-2');

history.listen(location => {
  console.log(location);
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(window.location.pathname); // Record a pageview for the given page
})

ReactDOM.render(
  <Provider store={appStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);