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

  componentDidMount: function() {
    this.checkValidity();
  },

  checkValidity: function() {
    if (this.refs.name.validity.valid) {
      this.props.actions.setValidity(true);
    } else {
      this.props.actions.setValidity(false);
    }
  },

  setName: function () {
    this.props.actions.setName(this.refs.name.value, this.props.expId);
    this.checkValidity();
  },

  render: function () {
    return (
      <section className="subsection-v new-exp-section">
      <h3 className="subsection-title">Experiment Name</h3>
      <div className="question-set">
        <p>What will this experiment be called?</p>
        <input
        size="40"
        ref="name"
        type="text"
        placeholder="Morning Coffee"
        onChange={this.setName}
        required
        />
      </div>
      </section>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(Name);
