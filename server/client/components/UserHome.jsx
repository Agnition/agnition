var React = require('react');
var connect = require('react-redux').connect;
var UserHomeActions = require('../actions/UserHomeActions.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var NewExperiment = require('NewExperiment');

function mapStatetoProps (state) {
  return {
    name: state.NewExperiment.get('name'),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(CreateExperimentActions, dispatch)
  };
}

var UserHome = React.createClass({

  handleClick: function () {
    this.props.actions.createExperiment();
  },

  render: function () {
    return (
      <button onClick={this.handleClick}>Create New Experiment</button>
      <NewExperiment experiment={this.props.newExperiment}/>
    );
  }
 })

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(UserHome);
