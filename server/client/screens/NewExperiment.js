// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var mongooseId = require('mongoose').Types;
var _ = require('lodash');

// import actions
var NewExperimentActions = require('../actions/NewExperiment');
var ExperimentActions = require('../actions/Experiments');
var Actions = _.extend(ExperimentActions, NewExperimentActions);

// import child containers
var Name = require('../containers/NewExperiment/Name');
var Hypothesis = require('../containers/NewExperiment/Hypothesis');
var DepVarWrapper = require('../containers/NewExperiment/DepVarWrapper');
var IndVarWrapper = require('../containers/NewExperiment/IndVarWrapper');
var SubmitExperiment = require('../containers/NewExperiment/SubmitExperiment');

var HypothesisCheck = require('../containers/NewExperiment/HypothesisCheck');

// import child components
var NewExperimentProgress = require('../containers/NewExperiment/components/ProgressWrapper');

function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var NewExperiment = React.createClass({

  expId: mongooseId.ObjectId().toString(),

  componentWillMount: function () {
    this.props.actions.createExperiment(this.expId);
    this.props.actions.setExperimentKind('ad_hoc', this.expId);
  },

  componentWillUnmount: function () {
    this.props.actions.deleteExperiment(this.expId);
  },

  setName: function () {
    this.props.actions.setName(this.refs.name.value, this.props.expId);
  },

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    this.props.actions.goToNextQuestion();
  },

  render: function () {

    var questions = [(<Name expId={this.expId} />),
        (<Hypothesis expId={this.expId} />),
        (<DepVarWrapper expId={this.expId} />),
        (<IndVarWrapper expId={this.expId} />),
        (<SubmitExperiment expId={this.expId} />)
        ];

    return (
      <div className="container">
        <div className="row">
          <div className="new-experiment col-md-4 col-sm-12">
            <h2>Create a new experiment.</h2>
            {questions[this.props.questionIndex]}
            <div className="row back-next-row">
              <div className="col-xs-9 col-xs-offset-3">
              {this.props.questionIndex > 0
                ? <button className="back-button" onClick={this.handleBack}>Back</button> 
                : null}
              {this.props.questionIndex < 5
                ? <button className="next-button" onClick={this.handleNext}>Next</button>
                : null}
              </div>
            </div>
          </div>
            <NewExperimentProgress expId={this.expId} />
        </div>
      </div>
    );
  }

});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);
