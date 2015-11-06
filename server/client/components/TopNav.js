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
    // links.push(<span className="nav-link"><Link key="documentation" to="/documentation">Documentation</Link></span>);
    if (this.props.username !== undefined) {
      links.push(<span className="nav-link"><Link key="dashboard" to="/dashboard">Dashboard</Link></span>);
      // links.push(<span className="nav-link"><Link key="profile" to="/profile">{this.props.username}</Link></span>);
      links.push(<span className="nav-link"><Logout key="logout"/></span>);
    } else {
      links.push(<span className="nav-link"><Signin /></span>);
    }

    return (
      <nav>
        {links}
      </nav>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(TopNav);
