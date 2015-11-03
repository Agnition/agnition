// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var MeasureWrapper = require('./MeasureWrapper');

// import actions
var DepVarActions = require('../../actions/DepVars');
var MeasureActions = require('../../actions/Measures');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, MeasureActions, DepVarActions);

function mapStatetoProps (state, ownProps) {
  return {
    name: state.DepVars.getIn([ownProps.depVarId, 'name']),
    measures: state.DepVars.getIn([ownProps.depVarId, 'measures']).toJS()
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var DepVar = React.createClass({

  setName: function () {
    this.props.actions.setDepVarName(this.refs.depVarName.value, this.props.depVarId);
    // for now this just sets the measure name to the depvar name -- change once multi-measures per depvar
    this.props.actions.setMeasureName(this.refs.depVarName.value, this.props.measures[0]);
  },

  render: function () {
    return (
      <div>
        <label>Dep Variable Name:
        <input
          type="text"
          ref="depVarName"
          onChange={this.setName}
          value={this.props.name} />
        </label>
        <MeasureWrapper key={this.props.depVarId} depVarId={this.props.depVarId} />
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(DepVar);
