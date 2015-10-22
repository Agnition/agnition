var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var ExpActions = require ('../../actions/Experiments');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, ExpActions);
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');


function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.refKey, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.refKey, 'cause']),
    effect: state.Experiments.getIn([ownProps.refKey, 'effect']),
    questionIndex: state.NewExperiment
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var Hypothesis = React.createClass({

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    this.setOverview();
    this.props.actions.goToNextQuestion();
  },

  setOverview: function () {
    var hypothesis = this.refs.hypothesisInput.value;
    var cause = this.refs.causeInput.value;
    var effect = this.refs.effectInput.value;
    this.props.actions.setHypothesis(hypothesis, this.props.refKey);
    this.props.actions.setCause(cause, this.props.refKey);
    this.props.actions.setEffect(effect, this.props.refKey);
  },

  handleChange: function () {
    this.setOverview();
  },

  render: function () {
    var hypothesis = this.props.hypothesis;
    var cause = this.props.cause;
    var effect = this.props.effect;

    return (
      <div>
        <section>
          <div>
            Please enter your hypothesis here.
          </div>
          <label>hypothesis</label>
          <input ref="hypothesisInput" type="text" value={hypothesis} onChange={this.handleChange}/>
          <label>cause</label>
          <input ref="causeInput" type="text" value={cause} onChange={this.handleChange}/>
          <label>effect</label>
          <input ref="effectInput" type="text" value={effect} onChange={this.handleChange}/>
          <button onClick={this.handleBack}>back</button>
          <button onClick={this.handleNext}>next</button>
        </section>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
