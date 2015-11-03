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
        <div className = 'definition-set'>
          <span className ='definition-label'>Hypothesis: </span> 
          <span className = 'definition'>{this.props.hypothesis}</span>
        </div>
        <div className = 'definition-set'>
          <span className ='definition-label'>Cause: </span> 
          <span className = 'definition'>{this.props.cause}</span>
        </div>
        <div className = 'definition-set'>
          <span className ='definition-label'>Effect: </span> 
          <span className = 'definition'>{this.props.effect}</span>
        </div>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
