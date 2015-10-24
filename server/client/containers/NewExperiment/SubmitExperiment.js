import React from 'react';
var connect = require('react-redux').connect;
var unNormalize = require('../../utils/un-normalize');

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

    }
    console.log(this.props.experiments);
    var exps = unNormalize(this.props.experiments);
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
