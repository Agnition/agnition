import React from 'react';
var connect = require('react-redux').connect;

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state) {
  return {
    cause: state.NewExperiment.get('cause'),
    effect: state.NewExperiment.get('effect'),
    questionIndex: state.NewExperiment.get('questionIndex')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var HypothesisCheck = React.createClass({

  handleBack: function () {
    console.log(this.props.actions);
    this.props.actions.goToPrevQuestion(this.props.questionIndex);
  },

  handleNext: function () {
    this.props.actions.goToNextQuestion(this.props.questionIndex);
  },

  render: function () {
    return (
      <div>
      <section>
        <p>"Let's rephrase your cause and effect here."</p>
        <p>"If this doesn't make sense, try to rephrase your causes and effects."</p>  
        <p>Here is your hypothesis: {this.props.hypothesis}</p>
        <p>Question: How does {this.props.cause} affect {this.props.effect}?</p>
        <button onClick={this.handleBack}>Redo</button>
        <button onClick={this.handleNext}>Makes Sense!</button>
      </section>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(HypothesisCheck);
