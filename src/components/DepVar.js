var React = require('react');
var OpenExps = require('./OpenExps');
var Measure = require('./Measure');
var Request = require('./Request');

// STATELOGIC logic to add in state properties
// STATELOGIC create the the depVar variable

var DepVar = React.createClass({
  render: function() {
    return (
      <div>
      //name as header
      <h3>{this.props.depVar.name}</h3>
      //currently only supports one measure...
      <h4>Measures</h4>
      <Measure measure = {this.props.depVar.measures[0]}>

      <h4>Requests</h4>
      <Request request = {this.props.depVar.requests[0]}>

      </div>
    );
  }
});

module.exports = DepVar;
