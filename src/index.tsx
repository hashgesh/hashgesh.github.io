import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore,compose } from 'redux';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import '../styles/index.scss';

import App from './containers/App';

import rootReducer from './reducers';

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose;
  if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension)
  }
}

const appStore = createStore(
  rootReducer,
  ...enhancers
);

const history = createBrowserHistory();

ReactGA.initialize('UA-108070842-2');

history.listen((action: any) => {
  const path = action.location.hash.substring(2);
  ReactGA.set({ page: path }); // Update the user's current page
  ReactGA.pageview(path); // Record a pageview for the given page
});

ReactDOM.render(
  <Provider store={appStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
