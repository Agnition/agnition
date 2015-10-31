var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require('../../actions/Samples');

var mapStateToProps = function (state, ownProps) {
  var depVarIds = state.Experiments.getIn([ownProps.expId, 'depVars']).toJS();
  var measureIds = _.reduce(depVarIds, function(measureIds, depVarId) {
    return measureIds.concat(state.DepVars.getIn([depVarId, 'measures']).toJS());
  }, []);
  var sampleIds = _.reduce(measureIds, function(sampleIds, measureId) {
    return sampleIds.concat(state.Measures.getIn([measureId, 'samples']).toJS());
  }, []);
  var samples = _.map(sampleIds, function(sampleId) {
    return state.Samples.get(sampleId).toJS();
  });
  return {
    indVarOption : state.Samples.getIn([ownProps.sampleId, ownProps.indVarId, 'value']),
    samples : samples,
    options : state.IndVars.get(ownProps.indVarId).toJS().options,
    name : state.IndVars.get(ownProps.indVarId).toJS().name,
    numMeasures : measureIds.length,
    numTrials : state.IndVars.get(ownProps.indVarId).toJS().numTrials,
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var ChosenOption = React.createClass({
  setIndVarOptionOnSample: function (value) {
    this.props.actions.setIndVarOptionOnSample(this.props.sampleId, this.props.indVarId, value);
  },
  countSampleOptions: function () {
    var states = _.pluck(this.props.samples, 'indVarStates');
    var ownProps = this.props;
    var options = _.map(states, function(indVars) {
      return _.first(_.pluck(_.filter(indVars, function(indVar) {
        // return indVar._id === this.props.indVarId; // TODO: use when id is consistent
        // until db is consistent
        return indVar.name === ownProps.name;
      }), 'value'));
    });
    var optionCount = {};
    _.each(this.props.options, function(option) {
      optionCount[option] = 0;
    });
    _.each(options, function(option) {
      optionCount[option]++;
    });
    return optionCount;
  },

  render: function() {
    if(this.props.indVarOption === undefined) {
      var options = [];
      _.each(this.countSampleOptions(), function(count, option){
        if(count < this.props.numTrials * this.props.numMeasures) {
          options.push(option);
        }
      }.bind(this));
      if(options.length === 0) {
        var span = <span>You have done all of the experiments.</span>;
      } else {
        var randOptionIndex = Math.floor(Math.random() * options.length);
        var randOption = options[randOptionIndex];
        this.setIndVarOptionOnSample(randOption);
        var span = <span>{this.props.name}: {randOption}</span>;
      }
    } else {
      var span = <span>{this.props.name}: {this.props.indVarOption}</span>;
    }
    return (
      <div>
        {span}
      </div>
    );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ChosenOption);
