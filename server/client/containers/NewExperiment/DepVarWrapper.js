// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var mongooseId = require('mongoose').Types;

var bindActionCreators = require('redux').bindActionCreators;

var DepVar = require('./DepVar');

// import actions
var DepVarActions = require('../../actions/DepVars');
var ExpActions = require('../../actions/Experiments');
var Actions = _.extend(ExpActions, DepVarActions);

function mapStatetoProps (state, ownProps) {
  return {
    depVars: state.Experiments.getIn([ownProps.expId, 'depVars']).toJS(),
    effect: state.Experiments.getIn([ownProps.expId, 'effect'])
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var DepVarWrapper = React.createClass({

  genComponent: function () {
    var depVarId = mongooseId.ObjectId().toString();
    this.props.actions.createDepVar(depVarId);
    this.props.actions.addDepVar(depVarId, this.props.expId);
  },

  componentWillMount: function() {
    if (this.props.depVars.length === 0) {
      this.genComponent();
    }
  },

  render: function () {
    var depVars = this.props.depVars.map(function(depVarId) {
      return <DepVar key={depVarId} depVarId={depVarId} name={this.props.effect}/>;
    }.bind(this));
    return (
      <div className="subsection-v new-exp-section">
        {depVars}
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchToProps)(DepVarWrapper);
