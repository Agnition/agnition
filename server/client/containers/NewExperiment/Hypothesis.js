import React, { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
var NewExperimentActions = require('../../actions/NewExperiment');
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import MeasureInput from './MeasureInput';
import HypothesisCheck from './HypothesisCheck';

function mapStatetoProps (state) {
  return {
    hypothesis: state.NewExperiment.get('hypothesis'),
    cause: state.NewExperiment.get('cause'),
    effect: state.NewExperiment.get('effect')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var Hypothesis = React.createClass({

  handleClick: function (event) {

    this.props.actions.setHypothesis(this.refs.hypothesisInput.value);
    this.refs.hypothesisInput.value = '';
    this.props.actions.setCause(this.refs.causeInput.value);
    this.refs.causeInput.value = '';
    this.props.actions.setEffect(this.refs.effectInput.value);
    this.refs.effectInput.value = '';

    this.showMeasures();
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
          <button onClick={this.handleClick}>next</button>
        </section>
        <HypothesisCheck />
        
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
