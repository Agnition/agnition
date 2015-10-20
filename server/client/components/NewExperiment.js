import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import Hypothesis from './Hypothesis';
import { Link } from 'react-router';

// function mapStatetoProps (state) {
//   return {
//     name: state.NewExperiment.get('name'),
//   };
// }

// function mapDispatchtoProps (dispatch) {
//   return {
//     actions: bindActionCreators(CreateExperimentActions, dispatch)
//   };
// }

const NewExperiment = React.createClass ({

  render: function () {
    return (
      <div className="new-experiment">
        <label>Name</label>
        <input ref="expName" type="text" />
        <Hypothesis />
        <h3>New experiment</h3>
        <li><Link to="/about">About</Link></li>
      </div>
    );
  }

});

module.exports = NewExperiment;

// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);
