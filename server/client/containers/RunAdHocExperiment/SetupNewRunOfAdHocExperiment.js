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
    var ids = state.Experiments.get(ownProps.expId).toJS().independentVars;
    var indVars = _.map(ids, function(id) {
      return state.IndVars.get(id).toJS();
    });

  return {
    indVars: indVars,
    expId : ownProps.expId,
    sampleId : ownProps.sampleId
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SetupNewRunOfAdHocExperiment = React.createClass({
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
    var nonRand = this.getNonRandomIndVars();
    var rand = this.getRandomIndVars();
    
    var nonRandSpan = null;
    if(nonRand.length > 0){
     randSpan = <span>enter the parameters for your new sample</span>;
    }
    
    var randSpan = null;
    if(rand.length > 0){
      randSpan = <span>these are the parameters we have randomly assigned</span>;
    }

    return(
      <div>
        {nonRandSpan}
        <div>
          <SelectNonRandomOptions indVarIds = {nonRand} sampleId = {this.props.sampleId} />
        </div>
        {randSpan}
        <div>
          {rand}
        </div>
        <button>Run Experiment</button>
      </div>
    );
  }

});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SetupNewRunOfAdHocExperiment)
