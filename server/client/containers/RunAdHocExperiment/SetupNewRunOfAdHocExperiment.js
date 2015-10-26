var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/Samples');
var SelectNonRandomOptions = require('./SelectNonRandomOptions');
var SelectRandomOptions  = 'tbd';
var shortId = require('shortid');

var mapStateToProps = function (state, ownProps) {
    //have to map the ids to the indVars
    var ids = state.Experiments.get(ownProps.params.expId).toJS().independentVars;
    var indVars = _.map(ids, function(id) {
      return state.IndVars.get(id).toJS();
    });
  return {
    indVars: indVars,
    sampleId: ownProps.params.sampleId,
    expId : ownProps.params.expId
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SetupNewRunOfAdHocExperiment = React.createClass({
  //NOT SURE IF SAMPLE SHOULD BE INSTANTIATED FROM HERE OR ELSEWHERE...
  getNonRandomIndVars : function() {
    return _.pluck(_.filter(this.props.indVars, function(indVar) {
      return !indVar.randomized;
    }),'_id');
  },
  getRandomIndVars : function () {
    //someday this will get filled out
    return  'not yet';
  },
  render: function () {
    return(
      <div>
        <span>enter the parameters for your new sample</span>
        <div>
          <SelectNonRandomOptions indVarIds = {this.getNonRandomIndVars()} sampleId = {this.props.sampleId} />
        </div>
        <span>these are the parameters we have randomly assigned</span>
        <div>
          {this.getRandomIndVars()}
        </div>
        <button>Run Experiment</button>
      </div>
    );
  }

});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SetupNewRunOfAdHocExperiment)
