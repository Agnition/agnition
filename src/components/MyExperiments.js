var React = require('react');
var OpenExps = require('./OpenExps');
var ClosedExps = require('./ClosedExps');

// STATELOGIC logic to add in state properties
// STATELOGIC create the my exps variable
// STATELOGIC loadDB here...

var MyExps = React.createClass({
  render: function() {
    return (
      <div>
      //STATELOGIC ROUTING how to pass in the correct set of exps?
      //currently setup to just filter my expierments inside open and closed exp components...
      <h2>Open Expierments</h2>
      <OpenExps myExperiments = {myExperiments} />
      
      <h2>Closed Expierments</h2>
      <ClosedExps myExperiments = {myExperiments} />

      </div>
    );
  }
});

module.exports = MyExps;