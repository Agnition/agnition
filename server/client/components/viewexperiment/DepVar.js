var React = require('react');
var Measure = require('./Measure');
var Request = require('./Request');
var connect = require('react-redux').connect;
var _ = require('underscore');

function mapStateToProps (state, ownProps) {
  return {
    depVars: (function () {
      var depVars = [];
      _.each(ownProps.depVarIds, function(id){
        console.log("-------------------------------------------id", id);
        depVars.push(state.DepVars.get(id).toJS());
      });
      console.log("-------------------------------------------state Prop", this.props.depVars);
      return depVars;
    })()
  };
}

var DepVar = React.createClass({
  render: function() {
    console.log("-------------------------------------------depvar prop2", this.props.depVar);
    return (
      <div>
      {/* name as header */}
      <h3>{this.props.depVar.name}</h3>
      {/* currently only supports one measure... */}
      <h4>Measures</h4>
      <h4>Requests</h4>
      </div>
    );
  }
});

var DepVars = React.createClass({
  render: function() {
  console.log("-------------------------------------------depvar prop", this.props.depVars);
    var divs = [];
    _.each(this.props.depVars, function(depVar){
      divs.push(<DepVar depVar = {depVar} />);
    })  
    return(
      <div>
        {divs}
      </div>
    )

  }
})

module.exports = connect(mapStateToProps)(DepVars);
