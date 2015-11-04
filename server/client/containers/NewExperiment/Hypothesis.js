var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var ExpActions = require('../../actions/Experiments');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, ExpActions);
var bindActionCreators = require('redux').bindActionCreators;


function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.expId, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.expId, 'cause']),
    effect: state.Experiments.getIn([ownProps.expId, 'effect']),
    questionIndex: state.NewExperiment
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var Hypothesis = React.createClass({

  setOverview: function () {
    var hypothesis = this.refs.hypothesisInput.value;
    var cause = this.refs.causeInput.value;
    var effect = this.refs.effectInput.value;
    this.props.actions.setHypothesis(hypothesis, this.props.expId);
    this.props.actions.setCause(cause, this.props.expId);
    this.props.actions.setEffect(effect, this.props.expId);
  },

  handleChange: function () {
    this.setOverview();
  },

  render: function () {
    var hypothesis = this.props.hypothesis;
    var cause = this.props.cause;
    var effect = this.props.effect;

    return (
      <section className="subsection-v new-exp-section">
        <section>
            <h3 className="subsection-title">Hypothesis and Overview</h3>
            <p className="guide">
              Let us begin creating your experiment. First, begin by defining the general outline.
            </p>
          <div className="question-set">
            <p className="question">What is your hypothesis for this experiment?</p>
              <input className="input-text" ref="hypothesisInput" type="text" value={hypothesis} onChange={this.handleChange}/>
          </div>
          <div className="question-set">
          <p className="question">What is the primary cause you are interested in?</p>
            <input className="input-text" ref="causeInput" type="text" value={cause} onChange={this.handleChange}/>
          </div>
          <div className="question-set">
          <p className="question">What is the effect you you are interested in?</p>
            <input className="input-text" ref="effectInput" type="text" value={effect} onChange={this.handleChange}/>
          </div>
        </section>
        <section className="guide">
          Put another way, how does 
          <span className="definition-inline">{this.props.cause}</span> 
          affect <span className="definition-inline">{this.props.effect}</span>? 
          If this sentence doesn't make sense, edit your cause and effect. 
        </section>
      </section>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
