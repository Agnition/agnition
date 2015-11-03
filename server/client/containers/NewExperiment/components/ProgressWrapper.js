var React = require('react');
// import { PropTypes } from 'react';
var connect = require('react-redux').connect;
var ProgressName = require('./ProgressName');
var ProgressHypothesis = require('./ProgressHypothesis');
var DepVars = require('../../../components/viewexperiment/DepVar');
var IndVars = require('../../../components/viewexperiment/IndVar');

function mapStatetoProps (state, ownProps) {
  console.log("-------------------------------------------",ownProps);
  return {
    questionIndex: state.NewExperiment,
    depVarIds: state.Experiments.getIn([ownProps.expId, 'depVars']).toJS(),
    indVarIds: state.Experiments.getIn([ownProps.expId, 'indVars']).toJS(),
  };
}

var NewExperimentProgress = React.createClass({

  render: function() {
    var progress = [(<ProgressName expId={this.props.expId} />),
                  (<ProgressHypothesis expId={this.props.expId}/>),
                  (<DepVars depVarIds = {this.props.depVarIds}/>),
                  (<IndVars indVars = {this.props.indVarIds} />)
                ];
    return (
      <div className ='section-inline'>
      <h2 clasName ='section-title'>Summary</h2>
      {progress.filter(function (component, i) {
        return i < this.props.questionIndex;
      }.bind(this))}
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
