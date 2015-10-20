//import React and Redux dependencies
var React = require('react');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

//import actions
var NewExperimentActions = require('../actions/NewExperiment');

//import child containers
var Name = require('../containers/NewExperiment/Name');
var Hypothesis = require('../containers/NewExperiment/Hypothesis');
var MeasureInput = require('../containers/NewExperiment/MeasureInput');
var HypothesisCheck = require('../containers/NewExperiment/HypothesisCheck');

//import child components
var NewExperimentProgress = require('../containers/NewExperiment/components/NewExperimentProgress');
function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment.get('questionIndex')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var NewExperiment = React.createClass ({

  questions: [(<Name />), (<Hypothesis />), (<HypothesisCheck />)],

  render: function () {
    console.log(this.props.questionIndex);
    return (
      <div className="new-experiment">
        <h3>Create a new experiment.</h3>
        {this.questions[this.props.questionIndex]}
        <NewExperimentProgress />
      </div>
    );
  }

});
/*
<label>Experiment Name</label>
<input ref="name" type="text" />
*/
module.exports = NewExperiment;

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);