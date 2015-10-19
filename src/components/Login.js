import React, { Component } from 'react';
import { Link } from 'react-router';
import { login } from '../actions/Login';
import { PropTypes } from 'react';
import connect from 'react-redux';
import bindActionCreators from 'redux';

function mapStatetoProps (state) {
  return {
    loggedIn: state.Login.get('loggedIn').toJS(),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}

const Login = React.createClass({

  handleClick() {
    this.props.actions.login(true);
  },

  render() {
    return <button onClick={this.handleClick}>login</button>
  }

});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Login);
