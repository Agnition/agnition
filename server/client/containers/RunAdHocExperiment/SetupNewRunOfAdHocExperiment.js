var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require('../../actions/Samples');
var SelectNonRandomOptions = require('./SelectNonRandomOptions');
var SelectRandomOptions  = require('./SelectRandomOptions');

var Link = require('react-router').Link;

var mapStateToProps = function (state, ownProps) {
  // have to map the ids to the indVars
  var indVarIds = state.Experiments.get(ownProps.expId).toJS().indVars;
  var indVars = _.map(indVarIds, function(indVarId) {
    return state.IndVars.get(indVarId).toJS();
  });

  var randIndVars = _.pluck(_.filter(indVars, function(indVar) {
    return indVar.randomized;
  }), '_id');
  var nonRandIndVars = _.pluck(_.filter(indVars, function(indVar) {
    return !indVar.randomized;
  }), '_id');
  return {
    randIndVars: randIndVars,
    nonRandIndVars: nonRandIndVars,
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SetupNewRunOfAdHocExperiment = React.createClass({
  render: function () {
    var nonRandSpan = null;
    if (this.props.nonRandIndVars.length > 0) {
     nonRandSpan = <span>enter the parameters for your new sample</span>;
    }

    var randSpan = null;
    if (this.props.randIndVars.length > 0) {
      randSpan = <span>these are the parameters we have randomly assigned</span>;
    }

    return (
      <div>
        {nonRandSpan}
        <div>
          <SelectNonRandomOptions
            indVarIds = {this.props.nonRandIndVars}
            sampleId = {this.props.sampleId} />
        </div>
        {randSpan}
        <div>
          <SelectRandomOptions
            indVarIds = {this.props.randIndVars}
            expId = {this.props.expId}
            sampleId = {this.props.sampleId} />
        </div>
        <button>
          <Link to={'/sample/' + this.props.expId + '/' + this.props.sampleId + '/adhoc/record'}>
            Run Experiment
          </Link>
        </button>
      </div>
    );
  }

});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SetupNewRunOfAdHocExperiment);
