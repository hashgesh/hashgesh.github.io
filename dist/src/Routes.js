import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './containers/About';
import Iss from './containers/Iss';
import Who from './containers/Who';
import Experience from './containers/Experience';
import Education from './containers/Education';
var routes = (React.createElement(Switch, null,
    React.createElement(Route, { exact: true, path: '/', component: About }),
    React.createElement(Route, { exact: true, path: '/education', component: Education }),
    React.createElement(Route, { exact: true, path: '/experience', component: Experience }),
    React.createElement(Route, { exact: true, path: '/iss', component: Iss }),
    React.createElement(Route, { exact: true, path: '/who', component: Who })));
export default routes;
