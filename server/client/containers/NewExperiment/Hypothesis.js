import React, { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
var NewExperimentActions = require('../../actions/NewExperiment');
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

function mapStatetoProps (state) {
  return {
    hypothesis: state.NewExperiment.get('hypothesis'),
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

var Hypothesis = React.createClass({

  handleBack: function () {
    this.props.actions.goToPrevQuestion(this.props.questionIndex);
  },

  handleNext: function (e) {
    this.submitHypothesis(e);
    this.props.actions.goToNextQuestion(this.props.questionIndex);
  },

  submitHypothesis: function (event) {
    var hypothesis = this.refs.hypothesisInput.value;
    var cause = this.refs.causeInput.value;
    var effect = this.refs.effectInput.value;
    this.props.actions.setOverview(hypothesis, cause, effect);
  },

  showMeasures: function () {
    this.refs.measures.style.display = "block";
    this.refs.hypothesisContainer.style.display = "none";
  },

  render: function () {
    console.log('render!');
    return (
      <div>
        <section ref="hypothesisContainer" style={{display: 'block'}}>
          <div>
            Please enter your hypothesis here.
          </div>
          <label>hypothesis</label>
          <input ref="hypothesisInput" type="text" />
          <label>cause</label>
          <input ref="causeInput" type="text" />
          <label>effect</label>
          <input ref="effectInput" type="text" />
          <button onClick={this.handleBack}>back</button>
          <button onClick={this.handleNext}>next</button>
        </section>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
