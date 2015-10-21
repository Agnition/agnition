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
    effect: state.NewExperiment.get('effect'),
    questionIndex: state.NewExperiment.get('questionIndex')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var MeasureWrapper = React.createClass ({

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

  handleSubmit: function (event) {
    this.preventDefault(event);
    console.log(this.refs.scale);
    console.log(this.refs.number);
  },

  render: function () {
    return (
      <div>
        <span>What are the ways that you can measure {this.props.effect}?</span>
        <h5>Measure Type</h5>
        <label>Scale</label>
        <form onSubmit={this.handleSubmit}>
          <input ref="scale" type="radio" />
          <label>Numerical Measure</label>
          <input ref="number" type="radio" />
          <label>Category</label>
          <input ref="category" type="radio" />
          <button onClick={this.addMeasure}>add another measure</button>
          <button onClick={this.handleBack}>back</button>
          <button onClick={this.handleNext}>next</button>
        </form>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureWrapper);