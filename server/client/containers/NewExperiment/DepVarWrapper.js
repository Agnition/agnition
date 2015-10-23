// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Scale = require('./Scale');

// import actions
var DepVarActions = require('../../actions/DependentVars');
var ExpActions = require('../../actions/Experiments');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, ExpActions, DepVarActions);

function mapStatetoProps (state, ownProps) {
  return {
    depVarIds: state.Experiments.getIn([ownProps.expId, 'depVarIds']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var DepVarWrapper = React.createClass ({

  componentWillMount: function () {
    this.addDepVar();
  },

  addDepVar: function () {
    this.depVarId = Math.floor(Math.random() * 1000000);
    this.props.actions.createDepVar(this.depVarId);
    this.props.actions.AddDepVar(this.depVarId, this.props.expId);
  },

  // handleBack: function () {
  //   this.props.actions.goToPrevQuestion();
  // },

  // handleNext: function () {
  //   // this.setName();
  //   this.props.actions.goToNextQuestion();
  // },

  handleChoice: function(event) {
    event.preventDefault();
    console.log('event.target.value =', event.target.value);
    this.props.actions.setDepVarKind(event.target.value);

  },

  render: function () {
    return (
      <div>

        <button onClick={this.addDepVar}>add another dependant variable</button>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(DepVarWrapper);
