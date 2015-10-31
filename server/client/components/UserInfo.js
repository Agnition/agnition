var React = require('react');
var connect = require('react-redux').connect;

function mapStatetoProps (state) {
  return {
    username: state.User.get('username')
  };
}

var UserInfo = React.createClass({
  render: function () {
    return (
      <div>
        <span>logged in as: {this.props.username}</span>
      </div>
    );
  }
});

// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
module.exports = connect(mapStatetoProps)(UserInfo);
