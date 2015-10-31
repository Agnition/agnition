var React = require('react');
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
var connect = require('react-redux').connect;
var History = require('react-router').History;
var Exps = require('../components/myexperiments/ExpsTable.js');
var _ = require('lodash');

function mapStateToProps (state) {
  return {
    exps: state.Experiments.toJS()
  };
}

function mapDispatchtoProps () {
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
      <div className="dashboard">
        <h1>Open Experiments</h1>
        {openExps.length > 0
        ? <Exps exps = {openExps} />
        : <p>No open experiments, add some!</p>}
        <div className="dashboard-buttons">
          <button className="add-new-exp" onClick={this.goToNewExp}>Add New Experiment</button>
          <button className="go-to-exps" onClick={this.goToAllExps}>View All Experiments</button>
        </div>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(Dashboard);
