import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Iss from './containers/Iss';
import Resume from './containers/Resume';
import Who from './containers/Who';

const routes = (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>

    <Route exact path='/about'>
      <About />
    </Route>

    <Route exact path='/resume'>
      <Resume />
    </Route>
    <Route exact path='/iss'>
      <Iss />
    </Route>
    <Route exact path='/who'>
      <Who />
    </Route>
  </Switch>
);

export default routes;
