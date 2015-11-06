var React = require('react');
// import { PropTypes } from 'react';
var connect = require('react-redux').connect;
var ProgressName = require('./ProgressName');
var ProgressHypothesis = require('./ProgressHypothesis');
var DepVars = require('../../../components/viewexperiment/DepVar');
var IndVars = require('../../../components/viewexperiment/IndVar');
var HelpText = require('../../../components/HelpText.js');

function mapStatetoProps (state, ownProps) {
  return {
    questionIndex: state.NewExperiment.get('question'),
    depVarIds: state.Experiments.getIn([ownProps.expId, 'depVars']).toJS(),
    indVarIds: state.Experiments.getIn([ownProps.expId, 'indVars']).toJS(),
  };
}

var NewExperimentProgress = React.createClass({

  render: function() {
    var progress = [(<div><ProgressName expId={this.props.expId} /></div>),
                  (<div><ProgressHypothesis expId={this.props.expId}/></div>),
                  (<div>
                    <h4 className="subsection-title-sm">
                      Dependent Variable
                      <HelpText message="This is the effect (i.e. what you are measuring)" />
                    </h4>
                    <DepVars depVarIds = {this.props.depVarIds}/>
                  </div>),
                  (<div>
                    <h4 className="subsection-title-sm">
                    Independent Variable
                    <HelpText message="This is the cause (i.e. what you will change)" />
                    </h4>
                    <IndVars indVars = {this.props.indVarIds} />
                  </div>)
                ];
    return (
      <section className="subsection-v new-exp-section progress-section">
        <h2>Summary</h2>
        {progress.filter(function (component, i) {
          return i < this.props.questionIndex;
        }.bind(this))}
      </section>
    );
  }
});

module.exports = connect(mapStatetoProps)(NewExperimentProgress);
