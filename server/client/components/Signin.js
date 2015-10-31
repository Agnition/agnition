var React = require('react');

var ExperimentActions = require('../actions/Experiments.js');
var IndVariableActions = require('../actions/IndVars.js');
var DepVariableActions = require('../actions/DepVars.js');
var MeasureActions = require('../actions/Measures.js');
var RequestActions = require('../actions/Requests.js');
var ReminderActions = require('../actions/Reminders.js');
var UserActions = require('../actions/Users.js');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;


function mapStatetoProps () {
  return {
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions : bindActionCreators(UserActions, dispatch),
    expActions : bindActionCreators(ExperimentActions, dispatch),
    depVarActions : bindActionCreators(DepVariableActions, dispatch),
    indVarActions : bindActionCreators(IndVariableActions, dispatch),
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
