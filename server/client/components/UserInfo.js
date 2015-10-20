var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state) {
  return {
    username: state.User.get('username')
  };
}

var UserInfo = React.createClass({
  render: function () {
    return (
      <div>
        <h5>Username :</h5>
        {this.props.username}
      </div>
    );
  }
});

// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Hypothesis);
module.exports = connect(mapStatetoProps)(UserInfo);
