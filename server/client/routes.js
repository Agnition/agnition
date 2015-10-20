import React from 'react';
import { Route } from 'react-router';
import App from './screens/App';
import Dashboard from './screens/Dashboard';
import NewExperiment from './screens/NewExperiment';
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
