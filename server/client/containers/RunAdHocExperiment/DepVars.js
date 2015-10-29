// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var $ = require('jquery');
require('jquery-serializejson');
var History = require('react-router').History;

var DepVar = require('./DepVar');

function mapStatetoProps (state, ownProps) {
  return {
    depVars: state.Experiments.getIn([ownProps.params.expid, 'depVars']).toJS(),
    indVars: state.Samples.getIn([ownProps.params.sampleid, 'indVarStates']).toJS()
  };
}

var DepVars = React.createClass({
  mixins: [ History ],
  handleSubmit: function (event) {
    event.preventDefault();
    console.log('buttonPushed!');
    var data = $(event.target).serializeJSON();
    $.post('/samples', data, function(success){
      console.log('success!');
      this.history.pushState(null, '/viewexp/' + this.props.params.expid);
    }.bind(this));
  },

  render: function () {
    var depVars = this.props.depVars.map(function(depVarId) {
      return <DepVar key={depVarId} depVarId={depVarId} />;
    });
    var indVars = _.map(this.props.indVars, function(value, indVarId){
      return (<input
                name={'indVars[' + indVarId + '][value]'}
                type="hidden"
                value={value} />);
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* <input name="expId" type="hidden" value={this.props.params.expid} /> */ }
          {indVars}
          {depVars}
          <button type="submit">Submit Sample</button>
        </form>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(DepVars);
