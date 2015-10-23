import React, { Component } from 'react';
// import { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

function mapStatetoProps (state, ownProps) {
  return {
    hypothesis: state.Experiments.getIn([ownProps.expId, 'hypothesis']),
    cause: state.Experiments.getIn([ownProps.expId, 'cause']),
    effect: state.Experiments.getIn([ownProps.expId, 'effect']),
    name: state.Experiments.getIn([ownProps.expId, 'name'])
  };
}

var NewExperimentProgress = React.createClass({
  render: function() {
    return (
      <div>
      <h4>{this.props.name}</h4>
        <div>
          Hypothesis: {this.props.hypothesis}
        </div>
        <div>
          Cause: {this.props.cause}
        </div>
        <div>
          Effect: {this.props.effect}
        </div>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
