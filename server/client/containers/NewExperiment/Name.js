// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var _ = require('underscore');

// import actions and extend into a single object
var NewExperimentActions = require('../../actions/NewExperiment');
var ExpActions = require('../../actions/Experiments');
var Actions = _.extend(NewExperimentActions, ExpActions);

function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment,
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var Name = React.createClass ({

  setName: function () {
    this.props.actions.setName(this.refs.name.value, this.props.expId);
  },

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    this.setName();
    this.props.actions.goToNextQuestion();
  },

  render: function () {
    return (
      <div>
        <label>Experiment Name</label>
        <input ref="name" type="text" />
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleNext}>next</button>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Name);
