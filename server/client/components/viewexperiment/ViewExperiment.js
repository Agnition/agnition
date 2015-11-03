var React = require('react');
var DepVar = require('./DepVar');
var IndVar = require('./IndVar');
var connect = require('react-redux').connect;
var shortId = require('shortid');
var Actions = require('../../actions/Samples');
var bindActionCreators = require('redux').bindActionCreators;
var History = require('react-router').History;
var Link = require('react-router').Link;

function mapStateToProps (state, ownProps) {
  var exp = state.Experiments.get(ownProps.params.expid).toJS();
  var depVarId = exp.depVars[0];
  var indVarId = exp.indVars[0];
  var trialsEach = state.IndVars.get(indVarId).get('numTrials');
  var optionsLength = state.IndVars.get(indVarId).get('options').toJS().length;
  var measureId = state.DepVars.get(depVarId).get('measures').get(0);
  var samplesNeeded = trialsEach * optionsLength;
  var samplesSubmitted = state.Measures.get(measureId).get('samples').length;
  return {
    exp: state.Experiments.get(ownProps.params.expid).toJS(),
    samplesSubmitted: samplesSubmitted,
    samplesNeeded: samplesNeeded
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var ViewExp = React.createClass({
  mixins: [ History ],
  render: function() {
    return (
      <div>
        {/* name as header */}
        <h2>{this.props.exp.name}</h2>
        <span>{this.props.exp._id}</span>
        <span>{this.props.exp.active}</span>
        <span>{this.props.exp.hypothesis}</span>
        <p>You have submitted {this.props.samplesSubmitted} samples out of the required {this.props.samplesNeeded}</p>
        <h2>Dep Variables</h2>
        <DepVar depVarIds = {this.props.exp.depVars} />
        <h2>Ind Variables</h2>
        <IndVar indVars = {this.props.exp.indVars} />
        <button><Link to={'/sample/' + this.props.exp._id + '/adhoc'}>Add Sample</Link></button>
      </div>
    );
  }

  //
  // <IndVar indVar = {this.props.exp.IndVar[0]} />
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(ViewExp);
