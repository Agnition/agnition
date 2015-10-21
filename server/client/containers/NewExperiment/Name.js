// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

// import actions
var NewExperimentActions = require('../../actions/NewExperiment');

function mapStatetoProps (state) {
  return {
    name: state.NewExperiment.get('name'),
    questionIndex: state.NewExperiment.get('questionIndex')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var Name = React.createClass ({

  setName: function () {
    this.props.actions.setName(this.refs.name.value);
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
