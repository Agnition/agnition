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
var dataTransforms = require('../../utils/dataTransforms.js');

function mapStateToProps (state, ownProps) {
  var expId = ownProps.exp._id;
  var samplesSubmitted = dataTransforms.getValidSamplesSubmitted(expId, state);
  var samplesNeeded = dataTransforms.getSamplesNeeded(expId, state);
  var exp = state.Experiments.get(expId).toJS();
  var depVarId = exp.depVars[0];
  var indVarId = exp.indVars[0];
  var measureId = state.DepVars.get(depVarId).get('measures').get(0);
  return {
    exp: exp,
    indVarId: indVarId,
    measureId: measureId,
    samplesSubmitted: samplesSubmitted,
    samplesNeeded: samplesNeeded
  };
}

// Made choice to keep rows and table in same file given tight linking..
var ExpRow = React.createClass({
  render: function() {
    var link, expName;
    if (this.props.exp.active) {
      expName = (<Link to={'/viewexp/' + this.props.exp._id}>{this.props.exp.name}</Link>);
      link = (<Link to={'/sample/' + this.props.exp._id + '/adhoc'}>Add Sample Now</Link>);
    } else {
      expName = this.props.exp.name
      link = (<Link to={'/closedexp/' + this.props.exp._id }>View Results</Link>);
    }
    return (
      <tr className={this.props.type}>
        <td>{expName}</td>
        <td>{this.props.exp.hypothesis}</td>
        <td>{link}</td>
        <td>{this.props.samplesSubmitted} / {this.props.samplesNeeded} Samples</td>
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
