import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Iss from './containers/Iss';
import Who from './containers/Who';
import Experience from './containers/Experience';
import Education from './containers/Education';

const routes = (
  <Switch>
    <Route exact path='/' component={Experience} />

    <Route exact path='/education' component={Education} />

    <Route exact path='/experience' component={Experience} />

    <Route exact path='/iss' component={Iss} />

    <Route exact path='/who' component={Who} />
  </Switch>
);

export default routes;
