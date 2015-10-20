// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import React from 'react';
import Hypothesis from '../containers/NewExperiment/Hypothesis';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewExperimentProgress from '../containers/NewExperiment/components/NewExperimentProgress';
var NewExperimentActions = require('../actions/NewExperiment');

function mapStatetoProps (state) {
  return {
    name: state.NewExperiment.get('name'),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

const NewExperiment = React.createClass ({

  setName: function () {
    this.props.actions.setName(this.refs.name.value);
  },

  render: function () {
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root';

    return (
      <div className="new-experiment">
        <label>Experiment Name</label>
        <input ref="name" type="text" />
        <button onClick={this.handleBack}>back</button>
        <button onClick={this.handleNext}>next</button>
        <NewExperimentProgress />
        {React.cloneElement(this.props.children || <div />, { key: key })}
      </div>
    );
  }

});

module.exports = NewExperiment;

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);