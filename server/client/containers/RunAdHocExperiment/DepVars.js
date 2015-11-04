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
  var indVars = state.Samples.getIn([ownProps.params.sampleid, 'indVarStates']).toJS();
  return {
    depVarId: depVarId,
    indVarId: state.Experiments.getIn([ownProps.params.expid, 'indVars']).toJS()[0],
    depVars: depVars,
    measureId: measureId,
    indVars: indVars
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
    if (data.invalid === 'on') {
      data.valid = false;
      delete data.invalid;
    } else {
      data.valid = true;
      delete data.invalid;
    }
    $.post('/samples', data, function(data) {
      var sample = data.samples[0];
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
          <input
            name={'expId'}
            type="hidden"
            value={this.props.params.expid} />
          <input
            name={'indVarId'}
            type="hidden"
            value={this.props.indVarId} />
          <input
            name={'depVarId'}
            type="hidden"
            value={this.props.depVarId} />
          {indVars}
          {depVars}
          <div><input type="checkbox" name="invalid" />Mark sample as invalid.</div>
          <button type="submit">Submit Sample</button>
        </form>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchToProps)(DepVars);
