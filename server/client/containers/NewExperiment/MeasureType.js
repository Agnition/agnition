// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

// import actions
var NewExperimentActions = require('../../actions/NewExperiment');

function mapStatetoProps (state, ownProps) {
  return {
    name: state.Experiments.getIn([ownProps.refKey, 'name']),
    questionIndex: state.Experiments.getIn([ownProps.refKey, 'questionIndex']),
    indVar: state.Experiments.getIn([ownProps.refKey, 'indVar']).toJS,
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var MeasureInput = React.createClass({
  addMeasure: function () {
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
        <button onClick={this.addMeasure}>save measure</button>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureInput);
