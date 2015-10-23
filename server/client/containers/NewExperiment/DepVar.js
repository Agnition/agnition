// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var MeasureWrapper = require('./MeasureWrapper');

// import actions
var DepVarActions = require('../../actions/DependentVars');
var MeasureActions = require('../../actions/Measures');
var NewExperimentActions = require('../../actions/NewExperiment');
var Actions = _.extend(NewExperimentActions, MeasureActions, DepVarActions);

function mapStatetoProps (state, ownProps) {
  return {
    name: state.DepVars.getIn([ownProps.depVarId, 'name']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var DepVar = React.createClass({

  setName: function () {
    this.props.actions.setDepVarName(this.refs.depVarName.value);
  },

  render: function () {
    return (
      <div>
        <label>Dependent Variable Name:
        <input type="text" ref="depVarName" /></label>
        <MeasureWrapper depVarId = {this.depVarId} />
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(DepVar);
