var React = require('react');
var connect = require('react-redux').connect;
var ReactDOM = require('react-dom');
var LandingPage = require('../components/LandingPage.jsx');
var UserActions = require('../actions/Users.jsx')
var bindActionCreators = require('redux').bindActionCreators;

function mapStateToProps(state) {
  console.log(state);
  return {
    user : state.Users.get('username')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

console.log(UserActions);


var App = React.createClass({
  render: function() {
    console.log(this);
    return (
      <div>
        <LandingPage />
        {this.props.user}
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
