var React = require('react');
// var connect = require('react-redux').connect;
// var LandingPage = require('../components/LandingPage.jsx');
// var bindActionCreators = require('redux').bindActionCreators;
var Dashboard = require('../components/Dashboard.jsx');
var NewExperiment = require('../components/NewExperiment.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
});


module.exports = App;