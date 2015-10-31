var React = require('react');
var connect = require('react-redux').connect;

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.expId, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.expId, 'cause']),
    effect: state.Experiments.getIn([ownProps.expId, 'effect']),
    questionIndex: state.Experiments.getIn([ownProps.expId, 'questionIndex'])
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var HypothesisCheck = React.createClass({

  render: function () {
    return (
      <div>
      <section>
        <p>Let's rephrase your cause and effect here.</p>
        <p>If this doesn't make sense, try to rephrase your causes and effects.</p>
        <p><b>Here is your hypothesis:</b> {this.props.hypothesis}</p>
        <p><b>Question:</b> How does {this.props.cause} affect {this.props.effect}?</p>
      </section>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(HypothesisCheck);
