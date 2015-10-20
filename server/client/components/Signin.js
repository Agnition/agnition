var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ExperimentActions = require('../actions/Experiments.js');
var IndependentVariableActions = require('../actions/IndependentVars.js');
var DependentVariableActions = require('../actions/DependentVariables.js');
var SampleActions = require('../actions/Samples.js');
var MeasureActions = require('../actions/Measures.js');
var RequestActions = require('../actions/Requests.js');
var ReminderActions = require('../actions/Reminders.js');
var UserActions = require('../actions/Users.js');
var normalize = require('../utils/normalize');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;


function mapStatetoProps (state) {
  return {};
}

function mapDispatchtoProps (dispatch) {
  return {
    actions : bindActionCreators(UserActions, dispatch),
    expActions : bindActionCreators(ExperimentActions, dispatch),
    depVarActions : bindActionCreators(DependentVariableActions, dispatch),
    indVarActions : bindActionCreators(IndependentVariableActions, dispatch),
    mesActions : bindActionCreators(MeasureActions, dispatch),
    reqActions : bindActionCreators(RequestActions, dispatch),
    remActions : bindActionCreators(ReminderActions, dispatch)
  };
}

var Signin = React.createClass({
  handleClick: function() {
    // need to set this to be a dynamic user id-- will break on you in dev
    $.get('/users/5625837d9d64345698bfa700/experiments', function(data) {
      //normalize
      var normData = normalize({ exps : data });
      console.log("===========================================");
      console.log(normData);

      //set all the normalized attributes to the appropriate state attribute
      this.props.expActions.setExperiments(normData.entities.experiments);
      this.props.depVarActions.setDepVars(normData.entities.dependentVars);
      this.props.indVarActions.setIndVars(normData.entities.independentVars);
      this.props.mesActions.setMeasures(normData.entities.measures);
      this.props.reqActions.setRequests(normData.entities.requests);
      this.props.remActions.setReminders(normData.entities.reminders);

    }.bind(this));
  },
  render: function() {
    return (
      <div className="signin">
        <button onClick={this.handleClick} >sign in</button>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Signin);
