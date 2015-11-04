var React = require('react');
var _ = require('underscore');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;
var Actions = require('../../actions/Samples');
var bindActionCreators = require('redux').bindActionCreators;
var History = require('react-router').History;
var Link = require('react-router').Link;
var ChartWrapper = require('../../containers/AnalyzeExperiment/MeasureNumeric/OptionList/ChartWrapper.js');
var utils = require('../../utils/componentUtils');

function mapStateToProps (state, ownProps) {
  var exp = state.Experiments.get(ownProps.exp._id).toJS();
  var depVarId = exp.depVars[0];
  var indVarId = exp.indVars[0];
  var trialsEach = state.IndVars.get(indVarId).get('numTrials');
  var optionsLength = state.IndVars.get(indVarId).get('options').toJS().length;
  var measureId = state.DepVars.get(depVarId).get('measures').get(0);
  var samplesNeeded = trialsEach * optionsLength;
  var samplesSubmitted = state.Measures.get(measureId).get('samples').length;
  return {
    exp: state.Experiments.get(ownProps.exp._id).toJS(),
    indVarId: indVarId,
    measureId: measureId,
    samplesSubmitted: samplesSubmitted,
    samplesNeeded: samplesNeeded
  };
}

// Made choice to keep rows and table in same file given tight linking..
var ExpRow = React.createClass({
  render: function() {
    var link;
    if (this.props.exp.active) {
      link = (<Link to={'/sample/' + this.props.exp._id + '/adhoc'}>Add Sample Now</Link>);
    } else {
      link = (<Link to={'/closedexp/' + this.props.exp._id }>View Results</Link>);
    }
    return (
      <tr className={this.props.type}>
        <td><Link to={'/viewexp/' + this.props.exp._id}>{this.props.exp.name}</Link></td>
        <td>{this.props.exp.hypothesis}</td>
        <td>{link}</td>
        <td>You've submitted {this.props.samplesSubmitted} out of {this.props.samplesNeeded} samples</td>
      </tr>
    );
  }
});

var ConnectedExpRow = connect(mapStateToProps)(ExpRow);

var Exps = React.createClass({
  render: function() {
    var rows = [];
    _.each(this.props.exps, function(exp) {
      if (exp.active) {
        rows.push(<ConnectedExpRow exp={exp} active={true} />);
      } else {
        rows.push(<ConnectedExpRow exp={exp} />);
      }
    });
      return (
        <table className="nav-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Hypothesis</th>
              {this.props.active ? <th>Run Now</th> : <th>Results</th>}
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
});

module.exports = Exps;
