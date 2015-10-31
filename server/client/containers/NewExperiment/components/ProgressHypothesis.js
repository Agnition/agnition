var React = require('react');
// import { PropTypes } from 'react';
var connect = require('react-redux').connect;

function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.expId, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.expId, 'cause']),
    effect: state.Experiments.getIn([ownProps.expId, 'effect'])
  };
}

var NewExperimentProgress = React.createClass({
  render: function() {
    return (
      <div>
        <div>Hypothesis: {this.props.hypothesis}</div>
        <div>Cause: {this.props.cause}</div>
        <div>Effect: {this.props.effect}</div>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
