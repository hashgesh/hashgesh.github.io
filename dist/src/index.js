import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import '../styles/index.scss';
import App from './containers/App';
import marqAppReducer from './reducers';
var appStore = createStore(marqAppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
var history = createBrowserHistory();
ReactGA.initialize('UA-108070842-2');
history.listen(function (action) {
    var path = action.location.hash.substring(2);
    ReactGA.set({ page: path }); // Update the user's current page
    ReactGA.pageview(path); // Record a pageview for the given page
});
ReactDOM.render(React.createElement(Provider, { store: appStore },
    React.createElement(HashRouter, null,
        React.createElement(App, null))), document.getElementById('root'));
