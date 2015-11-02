// import React and Redux dependencies
var React = require('react');

var LandingPage = React.createClass({

  componentWillMount: function () {
  },


  render: function () {

    return (
      <header>
      <a href="/auth/google">
        <button>sign in</button>
      </a>  
      </header>
      <section>
      <h1>Agnition</h1>
      <div>
        Agnition is a tool that lets you run experiments in your life.
      </div>
      </section>
      <section>
    );
  }

});

module.exports = LandingPage;
