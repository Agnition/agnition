import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
var Signin = require('../components/Signin.js');
var Logout = require('../components/Logout.js');
var UserInfo = require('../components/UserInfo.js');
var IndependentVarWrapper = require('../containers/NewExperiment/IndependentVarWrapper');

const Dashboard = React.createClass({
  render: function render() {
    return (
      <div className = 'dashboard'>
        <h1>Agnition</h1>
        <div>
          <ul>
            <li><Link to="/newexp">Create New Experiment</Link></li>
            <li><Link to="/myexps">My Experiments</Link></li>
          </ul>
          <IndependentVarWrapper expId = {'562a8aab8ca3941d9570680a'} />
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
