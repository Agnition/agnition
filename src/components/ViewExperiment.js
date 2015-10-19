var React = require('react');
var OpenExps = require('./OpenExps');
var ClosedExps = require('./ClosedExps');
var DepVar = require('./DepVar');
var IndVar = require('./IndVar');

// STATELOGIC logic to add in state properties?

var ViewExp = React.createClass({
  render: function() {
    return (
      <div>
      //name as header
      <h2>{this.props.exp.name}</h2>
      <span>{this.props.exp._id}</span>
      <span>{this.props.exp.active}</span>
      <span>{this.props.exp.hypothesis}</span>
      //currently only supports one depVar and one indVar
      <h2>Dependent Variables</h2>
      <DepVar depVar = {exp.depVar[0]} />

      <h2>Independent Variables</h2>
      <IndVar indVar = {exp.IndVar[0]} />

      </div>
    );
  }
});

module.exports = ViewExp;