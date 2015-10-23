var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var userId = require('../../../dummyData/userid.json').userId;

var ExperimentActions = require('../actions/Experiments.js');
var IndependentVariableActions = require('../actions/IndependentVars.js');
var DependentVariableActions = require('../actions/DependentVars.js');
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
  },
  render: function() {
    return (
      <a className="signin" href="/auth/google">
        sign in
      </a>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Signin);
