//import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

//import actions
var PLACEHOLDER_ACTIONS = require('../actions/PLACEHOLDER_ACTIONS');

function mapStatetoProps (state) {
  return {
    //SET YOUR PROPS HERE
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(PLACEHOLDER_ACTIONS, dispatch)
  };
}

var CONTAINER_COMPONENT = React.createClass ({

  render: function () {
    return ();
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(CONTAINER_COMPONENT);