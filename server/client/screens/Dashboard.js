var React = require('react');
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
var connect = require('react-redux').connect;
var History = require('react-router').History;
var Exps = require('../components/myexperiments/ExpsTable.js');
var _ = require('lodash');
var Link = require('react-router').Link;

var  HistogramWrapper = require('../containers/AnalyzeExperiment/MeasureNumeric/OptionList/HistogramWrapper.js');

var oneg = [];
var twog = [];

for(var i = 0; i < 100; i ++){
  oneg.push(Math.floor(Math.random()*100));
  twog.push(Math.floor(Math.random()*50));
}

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
        <div className="open-exps-container">
          <div>
            {openExps.length > 0
            ? <Exps exps = {openExps} active = {true} />
            : <p>No open experiments, add some!</p>}
          </div>
        </div>
        <div className="dashboard-buttons">
          <button className="add-new-exp" onClick={this.goToNewExp}>Add New Experiment</button>
          <button className="go-to-exps" onClick={this.goToAllExps}>View All Experiments</button>
        </div>
        <HistogramWrapper datasets={{'oneg':oneg, 'twog': twog}} bins= {10} />
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(Dashboard);
