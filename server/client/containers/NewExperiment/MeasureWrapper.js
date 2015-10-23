// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Scale = require('./Scale');

// import actions
var DepVarActions = require('../../actions/DependentVars');
var MeasureActions = require('../../actions/Measures');
var ExpActions = require('../../actions/Experiments');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, ExpActions, DepVarActions, MeasureActions);

function mapStatetoProps (state, ownProps) {
  return {
    name: state.Experiments.getIn([ownProps.refKey, 'name']),
    effect: state.Experiments.getIn([ownProps.refKey, 'effect']),
    questionIndex: state.Experiments.getIn([ownProps.refKey, 'questionIndex']),
    depVarKind: state.Experiments.getIn([ownProps.refKey, 'depVarKind']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var MeasureWrapper = React.createClass ({

  componentWillMount: function () {
    this.addMeasure();
  },

  addMeasure: function () {
    this.measureId = Math.floor(Math.random() * 1000000);
    this.props.actions.createMeasure(this.measureId);
    this.props.actions.AddMeasure(this.measureId, this.props.depVarId);
  },

  setName: function () {
    this.props.actions.setMeasureName(this.refs.measureName.value);
  },

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    // this.setName();
    this.props.actions.goToNextQuestion();
  },

  handleChoice: function(event) {
    event.preventDefault();
    console.log('event.target.value =', event.target.value);
    this.props.actions.setDepVarKind(event.target.value);

  },

  render: function () {
    var measureChoice = {
      'default': '',
      'scale': <Scale />
    }
    return (
      <div>
        <span>What are the ways that you can measure {this.props.effect}?</span>
        <h5>Measure Type</h5>
        <label>Scale</label>
        <label>measure name:</label>
        <input type="text" ref="measureName" />
        <button value="category" onClick={this.handleChoice}>Category</button>
        <button value="scale" onClick={this.handleChoice}>Scale</button>
        <button value="numerical" onClick={this.handleChoice}>Numerical</button>
        <button onClick={this.addMeasure}>add another measure</button>
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleNext}>next</button>
        {measureChoice[this.props.depVarKind]}
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureWrapper);
