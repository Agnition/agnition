var React = require('react');
var connect = require('react-redux').connect;
var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');


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
    this.props.actions.setOverview(hypothesis, cause, effect);
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
