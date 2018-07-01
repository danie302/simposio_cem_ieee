// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App  from './components/App';
import Home from './components/Home';
import Panelist from './components/Panelist';
import Contact from './components/Contact';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/panelist" exact component={ Panelist } />
      <Route path="/contact" exact component={ Contact } />
      <Route component={ Page404 } />
    </Switch>
  </App>


export default AppRoutes;
