var Measure = require('./Measure');
var utils = require('../../utils/componentUtils');
var React = require('react');
var connect = require('react-redux').connect;


function mapStateToProps (state, ownProps) {
  return {
    depVars: utils.mapIdsToObjs(ownProps.depVarIds, state.DepVars),
  };
}

var DepVar = React.createClass({
  render: function() {
    return (
      <div>
      <h3>{this.props.depVar.name}</h3>
      <h4>Measures</h4>
      <Measure measureIds = {this.props.depVar.measures}/>
      </div>
    );
  }
});

var DepVars = React.createClass({
  render: function() {
    return utils.divCollection(this.props.depVars, DepVar, 'depVar');
  }
});

module.exports = connect(mapStateToProps)(DepVars);
