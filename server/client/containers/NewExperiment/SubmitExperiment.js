import React from 'react';
var connect = require('react-redux').connect;
var unNormalize = require('../../utils/un-normalize');
var schema = require('../../utils/schema');

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state, ownProps) {
  return {
    experiments: state.Experiments.toJS()
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var SubmitExperiment = React.createClass({

  handleClick: function () {
    var exps = this.props.experiments;
    var expsList = [];
    for(var key in exps) {
      expsList.push(exps[key]);
    }
    console.log(expsList);
    var exps = unNormalize({exps: expsList}, schema);
    console.log(exps);

    console.log('you submitted your experiment');
  },

  render: function () {
    return (
      <div>
        <button ref="submitExperiment" onClick={this.handleClick}>Save Experiment</button>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(SubmitExperiment);
