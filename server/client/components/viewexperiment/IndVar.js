var React = require('react');
var Measure = require('./Measure');
var Request = require('./Request');

// STATELOGIC logic to add in state properties
// STATELOGIC create the the depVar variable

var IndVar = React.createClass({
  render: function() {
    return (
      <div>
      {/* name as header */}
      <h3>{this.props.indVar.name}</h3>

      </div>
    );
  }
});

module.exports = IndVar;
