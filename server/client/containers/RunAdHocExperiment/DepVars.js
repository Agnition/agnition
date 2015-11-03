// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var $ = require('jquery');
require('jquery-serializejson');
var History = require('react-router').History;
var bindActionCreators = require('redux').bindActionCreators;
var measureActions = require('../../actions/Measures.js');
var sampleActions = require('../../actions/Samples.js');
var actions = _.extend(measureActions, sampleActions);

var DepVar = require('./DepVar');

function mapStatetoProps (state, ownProps) {
  var depVars = state.Experiments.getIn([ownProps.params.expid, 'depVars']).toJS();
  var depVarId = depVars[0];
  var measureId = state.DepVars.getIn([depVarId, 'measures', 0]);
  return {
    depVars: depVars,
    measureId: measureId,
    indVars: state.Samples.getIn([ownProps.params.sampleid, 'indVarStates']).toJS()
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch)
  };
}

var DepVars = React.createClass({
  mixins: [ History ],
  handleSubmit: function (event) {
    event.preventDefault();
    var data = $(event.target).serializeJSON();
    $.post('/samples', data, function(samples) {
      var sample = samples[0];
      this.props.actions.insertSample(sample);
      this.props.actions.addSample(sample._id, this.props.measureId);

      this.history.pushState(null, '/viewexp/' + this.props.params.expid);
    }.bind(this));
  },

  render: function () {
    var depVars = this.props.depVars.map(function(depVarId) {
      return <DepVar key={depVarId} depVarId={depVarId} />;
    });
    var indVars = _.map(this.props.indVars, function(value, indVarId) {
      return (<input
                name={'indVars[' + indVarId + '][value]'}
                type="hidden"
                value={value} />);
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {indVars}
          {depVars}
          <button type="submit">Submit Sample</button>
        </form>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchToProps)(DepVars);
