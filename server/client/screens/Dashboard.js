import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
var Signin = require('../components/Signin.js');
var Logout = require('../components/Logout.js');
var UserInfo = require('../components/UserInfo.js');
// function mapStatetoProps (state) {
//   return {
//     name: state.NewExperiment.get('name'),
//   };
// }

// function mapDispatchtoProps (dispatch) {
//   return {
//     actions: bindActionCreators(CreateExperimentActions, dispatch)
//   };
// }

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
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
