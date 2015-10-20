import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import NewExperiment from './components/NewExperiment';
import About from './components/About';

export default (
  <div>
  <Route path="/" component={App}>
      <Route path="/dashboard"
             component={Dashboard} />
      <Route path="/new-experiment"
             component={NewExperiment} />
    </Route>
    <Route path="/about"
           component={About} />
           </div>
);
