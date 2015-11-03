var React = require('react');
// import { PropTypes } from 'react';
var connect = require('react-redux').connect;

function mapStatetoProps (state, ownProps) {
  return {
    name: state.Experiments.getIn([ownProps.expId, 'name'])
  };
}

var NewExperimentProgress = React.createClass({
  render: function() {
    return (
      <div className = 'definition-set'>
        <span className ='definition-label'>Name: </span> 
        <span className = 'definition'>{this.props.name}</span>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
