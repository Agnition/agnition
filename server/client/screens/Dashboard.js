import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
var Signin = require('../components/Signin.js');
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
      <div>
      <ul>
      <Signin />
      <h1>Hello World</h1>
        <li><Link to="/123/newexp">Create New Experiment</Link></li>
      </ul>
      </div>
    );
  }
});

module.exports = Dashboard;
