var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var ExperimentActions = require('../actions/Experiments.js');
// var ExperimentActions = require('../actions/Experiments.js');
// var ExperimentActions = require('../actions/Experiments.js');
// var ExperimentActions = require('../actions/Experiments.js');
// var ExperimentActions = require('../actions/Experiments.js');
// var ExperimentActions = require('../actions/Experiments.js');

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
    actions: bindActionCreators(UserActions, dispatch),
    expActions: bindActionCreators(ExperimentActions, dispatch),
    // depVarActions: bindActionCreators(DependentVarActions, dispatch),
    // indVarActions: bindActionCreators(IndependentVarActions, dispatch),
    // mesActions: bindActionCreators(MeasureActions, dispatch),
    // reqActions: bindActionCreators(RequestActions, dispatch),
    // remActions: bindActionCreators(ReminderActions, dispatch),
  };
}

var Signin = React.createClass({
  handleClick: function() {
    // need to set this to be a dynamic user id-- will break on you in dev
    $.get('/users/5625837d9d64345698bfa700/experiments', function(data) {
      //normalize
      console.log("===========================================");
      var normData = normalize({ exps : data });
      console.log(normData);
      this.props.expActions.setExperiments(normData);
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
