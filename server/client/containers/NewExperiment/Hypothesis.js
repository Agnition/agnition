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
      <div className="new-experiment-container">
        <section>
          <div>
            Please enter your hypothesis here.
          </div>
          <div className="padded">
            <label>Hypothesis:</label>
            <input ref="hypothesisInput" type="text" value={hypothesis} onChange={this.handleChange}/>
          </div>
          <div className="padded">
            <label>Cause:</label>
            <input ref="causeInput" type="text" value={cause} onChange={this.handleChange}/>
          </div>
          <div className="padded">
            <label>Effect:</label>
            <input ref="effectInput" type="text" value={effect} onChange={this.handleChange}/>
          </div>
        </section>
        <section>
          Put another way, how does {this.props.cause} affect {this.props.effect} ? 
        </section>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
