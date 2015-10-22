// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Scale = require('./Scale');

// import actions
var NewExperimentActions = require('../../actions/NewExperiment');

function mapStatetoProps (state) {
  return {
    name: state.NewExperiment.get('name'),
    effect: state.NewExperiment.get('effect'),
    questionIndex: state.NewExperiment.get('questionIndex'),
    depVarKind: state.NewExperiment.get('depVarKind')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var MeasureWrapper = React.createClass ({

  setName: function () {
    // this.props.actions.setMeasureName(this.refs.measureName.value);
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