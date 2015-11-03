// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var _ = require('underscore');

// import actions and extend into a single object
var NewExperimentActions = require('../../actions/NewExperiment');
var ExpActions = require('../../actions/Experiments');
var Actions = _.extend(NewExperimentActions, ExpActions);

function mapStatetoProps (state) {
  return {
    questionIndex: state.NewExperiment,
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var Name = React.createClass({

  setName: function () {
    this.props.actions.setName(this.refs.name.value, this.props.expId);
  },

  render: function () {
    return (
      <div className="name-container">
      <p>What will this experiment be called?</p>
        <input size="40" ref="name" type="text" onChange={this.setName}/>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Name);
