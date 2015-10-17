var React = require('react');
var connect = require('react-redux').connect;
var LandingPage = require('../components/LandingPage.jsx');
var UserActions = require('../actions/Users.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var CreateExperiment = require('../components/CreateExperiment.jsx');


function mapStateToProps(state) {
  return {
    user : state.Users.get('username')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

var App = React.createClass({

  render: function() {
    return (
      <div>
        <LandingPage />
        <CreateExperiment />
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
