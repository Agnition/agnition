// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

// import actions
var NewExperimentActions = require('../actions/NewExperiment');

// import child containers
var Name = require('../containers/NewExperiment/Name');
var Hypothesis = require('../containers/NewExperiment/Hypothesis');
var DepVarWrapper = require('../containers/NewExperiment/DepVarWrapper');
var IndVarWrapper = require('../containers/NewExperiment/IndVarWrapper');
var SubmitExperiment = require('../containers/NewExperiment/SubmitExperiment');

var HypothesisCheck = require('../containers/NewExperiment/HypothesisCheck');

// import child components
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

  setName: function () {
    this.props.actions.setName(this.refs.name.value, this.props.expId);
  },

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    this.props.actions.goToNextQuestion();
  },

  render: function () {

    var questions = [(<Name expId={this.expId} />),
        (<Hypothesis expId={this.expId} />),
        (<HypothesisCheck expId={this.expId} />),
        (<DepVarWrapper expId={this.expId} />),
        (<IndVarWrapper expId={this.expId} />),
        (<SubmitExperiment expId={this.expId} />)
        ];

    return (
      <div className="new-experiment">
        <h3>Create a new experiment.</h3>
        {questions[this.props.questionIndex]}
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleNext}>next</button>
        <NewExperimentProgress expId={this.expId} />
      </div>
    );
  }

});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);
