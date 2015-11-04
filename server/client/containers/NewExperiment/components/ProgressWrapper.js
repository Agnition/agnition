var React = require('react');
// import { PropTypes } from 'react';
var connect = require('react-redux').connect;
var ProgressName = require('./ProgressName');
var ProgressHypothesis = require('./ProgressHypothesis');
var DepVars = require('../../../components/viewexperiment/DepVar');
var IndVars = require('../../../components/viewexperiment/IndVar');

function mapStatetoProps (state, ownProps) {
  return {
    questionIndex: state.NewExperiment,
    depVarIds: state.Experiments.getIn([ownProps.expId, 'depVars']).toJS(),
    indVarIds: state.Experiments.getIn([ownProps.expId, 'indVars']).toJS(),
  };
}

var NewExperimentProgress = React.createClass({

  render: function() {
    var progress = [(<div><h4 className="subsection-title-sm">Name</h4><ProgressName expId={this.props.expId} /></div>),
                  (<div><h4 className="subsection-title-sm">Hypothesis</h4><ProgressHypothesis expId={this.props.expId}/></div>),
                  (<div><h4 className="subsection-title-sm">Dependent Variable</h4><DepVars depVarIds = {this.props.depVarIds}/></div>),
                  (<div><h4 className="subsection-title-sm">Independent Variable</h4><IndVars indVars = {this.props.indVarIds} /></div>)
                ];
    return (
      <section className="subsection-v new-exp-section">
        {progress.filter(function (component, i) {
          return i < this.props.questionIndex;
        }.bind(this))}
      </section>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
