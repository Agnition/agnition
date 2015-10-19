// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import React from 'react';
import Hypothesis from './Hypothesis';

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
        <Hypothesis />
      </div>
    );
  }

});

module.exports = NewExperiment;

// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);