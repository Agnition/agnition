var React = require('react');
var About = require('./About.jsx');
var Signin = require('./Signin.jsx');
var Hypothesis = require('./Hypothesis');
var OpenExps = require('./OpenExps');

// STATELOGIC logic to add in state properties


var MyExps = React.createClass({
  render: function() {
    return (
      <div>
      //how to pass in the correct set of exps?
      <OpenExps />
      <ClosedExps />
      </div>
    );
  }
});

module.exports = MyExps;