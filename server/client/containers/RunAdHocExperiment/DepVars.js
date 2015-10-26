// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var $ = require('jquery');

var DepVar = require('./DepVar');

function mapStatetoProps (state, ownProps) {
  return {
    depVars: state.Experiments.getIn([ownProps.expId, 'dependentVars']).toJS() //Change later to depVars
  };
}

var DepVars = React.createClass({
  handleSubmit: function (event) {
    $.post('/submit', $(event.target).serializeArray());
  },

  render: function () {
    var depVars = this.props.depVars.map(function(depVarId) {
      return <DepVar key={depVarId} depVarId={depVarId} />;
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="optionIndex" type="hidden" value={this.props.optionIndex} />
          <input name="expId" type="hidden" value={this.props.expId} />
          {depVars}
          <button type="submit">Submit Sample</button>
        </form>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(DepVars);
