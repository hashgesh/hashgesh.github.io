import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './components/About';
import Iss from './components/Iss';
import Town from './components/Town';
import Resume from './components/Resume';

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
    <Route exact path='/town'>
      <Town />
    </Route>
  </Switch>
);

export default routes;
