import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import About from './containers/About';
import Iss from './containers/Iss';
import Resume from './containers/Resume';
import Who from './containers/Who';

const routes = (
  <Switch>
    <Route exact path='/' component={Home}/>

    <Route exact path='/about' component={About}/>

    <Route exact path='/resume' component={Resume}/>

    <Route exact path='/iss' component={Iss}/>

    <Route exact path='/who' component={Who}/>

  </Switch>
);

export default routes;
