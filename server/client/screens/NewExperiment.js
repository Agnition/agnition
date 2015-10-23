//import React and Redux dependencies
var React = require('react');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

//import actions
var NewExperimentActions = require('../actions/NewExperiment');

//import child containers
var Name = require('../containers/NewExperiment/Name');
var Hypothesis = require('../containers/NewExperiment/Hypothesis');
var DepVarWrapper = require('../containers/NewExperiment/DepVarWrapper');
var HypothesisCheck = require('../containers/NewExperiment/HypothesisCheck');

//import child components
var NewExperimentProgress = require('../containers/NewExperiment/components/NewExperimentProgress');


function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}



var NewExperiment = React.createClass({

  expId: Math.floor(Math.random() * 1000000),

  componentWillMount: function () {
    this.props.actions.createExperiment(this.expId);
  },

  render: function () {
    var questions = [(<Name expId={this.expId} />),
                    (<Hypothesis expId={this.expId} />),
                    (<HypothesisCheck expId={this.expId} />),
                    (<DepVarWrapper expId={this.expId} />)
                    ];
    return (
      <div className="new-experiment">
        <h3>Create a new experiment.</h3>
        {questions[this.props.questionIndex]}
        <NewExperimentProgress expId={this.expId} />

      </div>
    );
  }

});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);
