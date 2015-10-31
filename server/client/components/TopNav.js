var React = require('react');
var Link = require('react-router').Link;
var Signin = require('./Signin');
var Logout = require('./Logout');
var connect = require('react-redux').connect;


function mapStatetoProps (state) {
  return {
    username: state.User.get('username')
  };
}

function mapDispatchtoProps () {
  return {
  };
}

var TopNav = React.createClass({
  render: function () {
    var links = [];
    links.push(<Link key="documentation" to="/documentation">Documentation</Link>);
    if (this.props.username !== undefined) {
      links.push(<Link key="dashboard" to="/dashboard">Dashboard</Link>);
      links.push(<Link key="profile" to="/profile">{this.props.username}</Link>);
      links.push(<Logout key="logout"/>);
    } else {
      links.push(<Signin />);
    }

    return (
      <nav>
        {links}
      </nav>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(TopNav);
