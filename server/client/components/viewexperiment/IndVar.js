
var utils = require('../../utils/componentUtils');
var React = require('react');
var connect = require('react-redux').connect;


function mapStateToProps (state, ownProps) {
  return {
    indVars: utils.mapIdsToObjs(ownProps.indVars, state.IndVars),
  };
}


var Options = React.createClass({
  render: function() {
    var options = this.props.options.map(function(option) {
      return <span>{option}</span>;
    });
    return (
      <div className="options">
        {options}
      </div>
    );
  }
});

var IndVar = React.createClass({
  render: function() {
    return (
      <div className="indvar">
        <h3>{this.props.indVar.name}</h3>
        <h4>Options</h4>
        <Options options = {this.props.indVar.options}/>
      </div>
    );
  }
});

var IndVars = React.createClass({
  render: function() {
    return utils.divCollection(this.props.indVars, IndVar, 'indVar') }
});

module.exports = connect(mapStateToProps)(IndVars);
