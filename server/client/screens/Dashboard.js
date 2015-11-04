var React = require('react');
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
var connect = require('react-redux').connect;
var History = require('react-router').History;
var Exps = require('../components/myexperiments/ExpsTable.js');
var _ = require('lodash');
var Link = require('react-router').Link;

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
      <div className="container">
        <div className="row">
          <h2 className='section-title'>Open Experiments</h2>
          <div className="section-block">
            {openExps.length > 0
            ? <Exps exps = {openExps} active = {true} />
            : <p>No open experiments, add some!</p>}
          </div>
          <div className="dashboard-buttons">
            <button className="set-button" onClick={this.goToNewExp}>Add New Experiment</button>
            <button className="set-button" onClick={this.goToAllExps}>View All Experiments</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(Dashboard);
