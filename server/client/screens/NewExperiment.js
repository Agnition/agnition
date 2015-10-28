// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

// import actions
var NewExperimentActions = require('../actions/NewExperiment');

// import child containers
var Name = require('../containers/NewExperiment/Name');
var Hypothesis = require('../containers/NewExperiment/Hypothesis');
var DepVarWrapper = require('../containers/NewExperiment/DepVarWrapper');
var IndVarWrapper = require('../containers/NewExperiment/IndVarWrapper');
var SubmitExperiment = require('../containers/NewExperiment/SubmitExperiment');

var HypothesisCheck = require('../containers/NewExperiment/HypothesisCheck');

// import child components
var NewExperimentProgress = require('../containers/NewExperiment/components/NewExperimentProgress');

function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var NewExperiment = React.createClass({

  expId: Math.floor(Math.random() * 1000000),

  componentWillMount: function () {
    this.props.actions.createExperiment(this.expId);
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
        (<HypothesisCheck expId={this.expId} />),
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
                <button className="back-button" onClick={this.handleBack}>Back</button>
                <button className="next-button" onClick={this.handleNext}>Next</button>
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
