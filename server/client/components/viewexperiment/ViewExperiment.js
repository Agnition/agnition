var React = require('react');
var DepVar = require('./DepVar');
var IndVar = require('./IndVar');
var connect = require('react-redux').connect;

function mapStateToProps (state, ownProps) {
  return {
    exp: state.Experiments.get(ownProps.params.expid).toJS(),
  };
}

var ViewExp = React.createClass({
  render: function() {
    console.log("-------------------------------------------EXP",this.props.exp);
    console.log("-------------------------------------------EXP",this.props.exp.independentVars);
    return (
      <div>
        {/* name as header */}
        <h2>{this.props.exp.name}</h2>
        <span>{this.props.exp._id}</span>
        <span>{this.props.exp.active}</span>
        <span>{this.props.exp.hypothesis}</span>
        <h2>Dependent Variables</h2>
        <DepVar depVarIds = {this.props.exp.dependentVars} />
        <h2>Independent Variables</h2>
        <IndVar indVarIds = {this.props.exp.independentVars} />
      </div>
    );
  }

  //
  // <IndVar indVar = {this.props.exp.IndVar[0]} />
});

module.exports = connect(mapStateToProps)(ViewExp);
