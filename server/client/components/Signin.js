var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ExperimentActions = require('../actions/Experiments.js');
var UserActions = require('../actions/Users.js');
var normalize = require('../utils/normalize')
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;


function mapStatetoProps (state) {
  return {
    // hypothesis: state.Hypothesis.get('hypothesis'),
    // iv: state.Hypothesis.get('iv'),
    // dv: state.Hypothesis.get('dv')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch),
    expActions: bindActionCreators(ExperimentActions, dispatch)
  };
}

var Signin = React.createClass({
  handleClick: function() {
    $.get('/users/562586f131b59bc2557187f3/experiments', function(data) {
      //normalize
      console.log("===========================================");
      console.log(data);
      var n = normalize({
        exps : data
      });
      console.log(n);
      console.log(this.props.expActions);
      this.props.expActions.setExperiments(n);
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
