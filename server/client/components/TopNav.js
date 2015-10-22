var React = require('react');
var Link = require('react-router').Link;
var Signin = require('./Signin');
var Logout = require('./Logout');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;


function mapStatetoProps (state) {
  return {
    username: state.User.get('username')
  };
}

function mapDispatchtoProps (dispatch) {
  return {};
}

var TopNav = React.createClass ({
  render: function () {
    var links = [];
    links.push(<Link to="/documentation"> Documentation</Link>);
    if(this.props.username !== undefined){
      links.push(<Link to="/dashboard"> Dashboard</Link>);
      links.push(<Link to="/profile"> {this.props.username}</Link>);
      links.push(<Logout />);
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
