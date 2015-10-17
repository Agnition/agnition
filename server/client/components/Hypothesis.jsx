'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var HypothesisActions = require('../actions/Hypothesis.jsx');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state) {
  return {
    hypothesis: state.Hypothesis.get('hypothesis'),
    iv: state.Hypothesis.get('iv'),
    dv: state.Hypothesis.get('dv')
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
    this.props.actions.setCause(this.refs.causeInput.value);
    this.refs.causeInput.value = '';
    this.props.actions.setEffect(this.refs.effectInput.value);
    this.refs.effectInput.value x= '';
  },

  render: function () {
    console.log(this);
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
          <p>{this.props.hypothesis}</p>
          <p>{this.props.iv}</p>
          <p>{this.props.dv}</p>
        </section>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);