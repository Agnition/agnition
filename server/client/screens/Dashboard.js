import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
var connect = require('react-redux').connect;
var Signin = require('../components/Signin.js');
var Logout = require('../components/Logout.js');
var UserInfo = require('../components/UserInfo.js');
var History = require('react-router').History;
var Exps = require('../components/myexperiments/ExpsTable.js')
var _ = require('lodash');

function mapStateToProps (state) {
  debugger;
  return {
    // name: state.NewExperiment.get('name'),
    exps: state.Experiments.toJS()
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    // actions: bindActionCreators(CreateExperimentActions, dispatch)
  };
}

const Dashboard = React.createClass({
  mixins: [ History ],
  goToNewExp: function() {
    this.history.pushState(null, '/newexp/');
  },

  goToAllExps: function() {
    this.history.pushState(null, '/myexps/');
  },

  render: function render() {
    var openExps = _.filter(this.props.exps, function(exp) {
      return exp.active;
    });
    console.log("===============================");
    console.log(this.props.exps);
    
    return (
      <div className = 'dashboard'>
        <h1>Open Experiments</h1>
        {openExps.length > 0 
        ? <Exps exps = {openExps} />
        : <p>No open experiments, add some!</p>}
        <button onClick={this.goToNewExp}>Add New Experiment</button>
        <button onClick={this.goToAllExps}>View All Experiments</button>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(Dashboard);
