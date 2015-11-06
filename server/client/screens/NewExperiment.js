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

var ProgressWrapper = require('../containers/NewExperiment/components/ProgressWrapper');

const QUESTION_COUNT = 4;

function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment.get('question'),
    valid: state.NewExperiment.get('valid')
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
    if (this.props.questionIndex < QUESTION_COUNT) {
      this.props.actions.resetQuestionIndex();
      this.props.actions.deleteExperiment(this.expId);
    }
  },

  setName: function () {
    this.props.actions.setName(this.refs.name.value, this.props.expId);
  },

  handleBack: function () {
    this.props.actions.goToPrevQuestion();
  },

  handleNext: function () {
    if (this.props.valid) {
      this.props.actions.goToNextQuestion();
    }
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
          <section className="col-md-6">
            {questions[this.props.questionIndex]}
            <section className="subsection-h">
              {this.props.questionIndex > 0
                ? <button className="back-button" onClick={this.handleBack}>Back</button>
                : null}
              {this.props.questionIndex < 4
                ? <button className={this.props.valid ? 'next-button' : ' next-button disabled'} onClick={this.handleNext}>Next</button>
                : null}
            </section>
          </section>
          <section className="col-md-6">
            <ProgressWrapper expId={this.expId} />
          </section>
        </div>
      </div>
    );
  }

});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);
