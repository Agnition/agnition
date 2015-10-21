import React, { Component } from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
var HypothesisActions = require('../actions/Hypothesis');
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

function mapStatetoProps (state) {
  return {
    hypothesis: state.Hypothesis.get('hypothesis'),
    cause: state.Hypothesis.get('cause'),
    effect: state.Hypothesis.get('effect')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(HypothesisActions, dispatch)
  };
}

var Hypothesis = React.createClass({

  handleClick: function (event) {

    this.props.actions.setHypothesis(this.refs.hypothesisInput.value);
    this.refs.hypothesisInput.value = '';
    this.props.actions.setCause(this.refs.cause.value);
    this.refs.causeInput.value = '';
    this.props.actions.setEffect(this.refs.effect.value);
    this.refs.effectInput.value = '';
  },

  render: function () {
    console.log('render!');
    console.log(this.props);
    return (
      <div>
        <section>
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
        <section>
          <p>"Let's rephrase your cause and effect here."</p>
          <p>"If this doesn't make sense, try to rephrase your causes and effects."</p>  
          <p>{this.props.hypothesis}</p>
          <p>Question: How does {this.props.cause} affect {this.props.effect}?</p>
        </section>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
