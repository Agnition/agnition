var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var userId = require('../../../dummyData/userid.json').userId;
var cookie = require('react-cookie');

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
  return {
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

var Logout = React.createClass({
  handleClick: function() {
    $.get('/logout', function(data) {
      cookie.remove('connect.sid');
      this.props.actions.logout();
    }.bind(this));
  },
  render: function() {
    return (
      <a className="logout" href="#" onClick={this.handleClick}>
        Log Out
      </a>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Logout);
