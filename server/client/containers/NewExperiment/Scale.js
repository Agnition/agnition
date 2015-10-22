// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

// import actions
var NewExperimentActions = require('../../actions/NewExperiment');

function mapStatetoProps (state) {
  return {
    depVarKind: state.NewExperiment.get('name')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var Scale = React.createClass ({

  render: function () {
    return (
      <div>
        <h3>{this.props.depVarKind}</h3>
        This is where we set the depvar deets.
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Scale);