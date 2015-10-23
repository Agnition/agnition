// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Measure = require('./Measure');


// import actions
var DepVarActions = require('../../actions/DependentVars');
var MeasureActions = require('../../actions/Measures');
var ExpActions = require('../../actions/Experiments');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, ExpActions, DepVarActions, MeasureActions);

function mapStatetoProps (state, ownProps) {
  return {
    measures: state.DepVars.getIn([ownProps.depVarId, 'measures']),
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
    this.props.actions.addMeasure(this.measureId, this.props.depVarId);
  },

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    // this.setName();
    this.props.actions.goToNextQuestion();
  },

  render: function () {
    return (
      <div>
        <Measure measureId = {this.measureId} />
        <button onClick={this.addMeasure}>add another measure</button>
      </div>
      );
      // <div>
      //   <span>What are the ways that you can measure {this.props.effect}?</span>
      //   <h5>Measure Type</h5>
      //   <label>Scale</label>
      //   <label>measure name:</label>
      //   <input type="text" ref="measureName" />
      //   <button value="category" onClick={this.handleChoice}>Category</button>
      //   <button value="scale" onClick={this.handleChoice}>Scale</button>
      //   <button value="numerical" onClick={this.handleChoice}>Numerical</button>
      //   <button onClick={this.addMeasure}>add another measure</button>
      //   <button onClick={this.handleBack}>back</button>
      //   <button onClick={this.handleNext}>next</button>
      //   {measureChoice[this.props.depVarKind]}
      // </div>
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureWrapper);
