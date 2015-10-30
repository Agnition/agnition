import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
var connect = require('react-redux').connect;
var Signin = require('../components/Signin.js');
var Logout = require('../components/Logout.js');
var UserInfo = require('../components/UserInfo.js');
<<<<<<< HEAD
var History = require('react-router').History;
var Exps = require('../components/myexperiments/ExpsTable.js')
var _ = require('lodash');
=======
var SampleBar = require('../containers/AnalyzeExperiment/MeasureNumeric/OptionList/BarChart.js');
// function mapStatetoProps (state) {
//   return {
//     name: state.NewExperiment.get('name'),
//   };
// }
>>>>>>> have an untested barchat component

function mapStateToProps (state) {
  debugger;
  return {
    exps: state.Experiments.toJS()
  };
}

function mapDispatchtoProps (dispatch) {
  return {
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
