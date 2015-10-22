import React from 'react';
var connect = require('react-redux').connect;

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.refKey, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.refKey, 'cause']),
    effect: state.Experiments.getIn([ownProps.refKey, 'effect']),
    questionIndex: state.Experiments.getIn([ownProps.refKey, 'questionIndex'])
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var HypothesisCheck = React.createClass({

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    this.props.actions.goToNextQuestion();
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
