import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import NewExperiment from './components/NewExperiment';

export default (
  <Route path="/" component={App}>
    <Route path="/dashboard"
           component={Dashboard} />
    <Route path="/new-experiment"
           component={NewExperiment} />
  </Route>
);
