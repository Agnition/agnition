var React = require('react');
var About = require('./About.jsx');
var Signin = require('./Signin.jsx');
var Hypothesis = require('./Hypothesis.jsx');

var LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <header className="header">
          <Signin />
          <h1>Agnition</h1>
        </header>
          <About />
          <Hypothesis />
      </div>
    );
  }
});

module.exports = LandingPage;
