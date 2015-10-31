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
        <h3>Name: {this.props.name}</h3>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
