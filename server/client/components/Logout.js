var React = require('react');
var $ = require('jquery');
var cookie = require('react-cookie');

var UserActions = require('../actions/Users.js');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;


function mapStateToProps () {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

var Logout = React.createClass({
  handleClick: function() {
    $.get('/logout', function() {
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Logout);
