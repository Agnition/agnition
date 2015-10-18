var React = require('react');
var connect = require('react-redux').connect;
var Hypothesis = require('./Hypothesis.jsx');
var bindActionCreators = require('redux').bindActionCreators;

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

var NewExperiment = React.createClass ({

  render: function () {
  console.log('trying to render new experiment');
    return (
      <div className="new-experiment">
        <Hypothesis/>
      </div>
    );
  }

});

module.exports = NewExperiment;

// module.exports = connect(mapStatetoProps, mapDispatchtoProps)(NewExperiment);