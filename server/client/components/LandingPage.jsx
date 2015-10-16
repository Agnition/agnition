var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.jsx');
var About = require('./About.jsx');
var Signin = require('./Signin.jsx');


var LandingPage = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <About />
        <Signin />
      </div>
    );
  }
});

ReactDOM.render(
  <LandingPage />,
  document.getElementById('root')
);

module.exports = LandingPage;
