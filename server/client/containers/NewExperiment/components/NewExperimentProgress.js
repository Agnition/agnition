import React, { Component } from 'react';
// import { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

function mapStatetoProps (state) {
  return {
    hypothesis: state.NewExperiment.get('hypothesis'),
    cause: state.NewExperiment.get('cause'),
    effect: state.NewExperiment.get('effect'),
    name: state.NewExperiment.get('name')
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