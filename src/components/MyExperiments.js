var React = require('react');
var About = require('./About.jsx');
var Signin = require('./Signin.jsx');
var Hypothesis = require('./Hypothesis');
var OpenExps = require('./OpenExps');

// STATELOGIC logic to add in state properties
// STATELOGIC create the my exps variable

var MyExps = React.createClass({
  render: function() {
    return (
      <div>
      //STATELOGIC ROUTING how to pass in the correct set of exps?
      //currently setup to just filter my expierments...
      <OpenExps myExperiments = {myExperiments} />
      <ClosedExps myExperiments = {myExperiments} />

      </div>
    );
  }
});

module.exports = MyExps;