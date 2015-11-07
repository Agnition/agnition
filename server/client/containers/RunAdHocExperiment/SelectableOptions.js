var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require('../../actions/Samples');
var utils = require('../../utils/componentUtils');

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
  var options = state.IndVars.get(ownProps.indVarId).toJS().options;
  var samplesTaken = utils.countSampleOptions(samples, ownProps.indVarId, options);
  var numTrials = state.IndVars.get(ownProps.indVarId).toJS().numTrials;
  return {
    indVarOption : state.Samples.getIn([ownProps.sampleId, ownProps.indVarId, 'value']),
    samples : samples,
    options : options,
    name : state.IndVars.get(ownProps.indVarId).toJS().name,
    numMeasures : measureIds.length,
    numTrials : numTrials,
    samplesTaken: samplesTaken,
    numSamplesPerOption : numTrials
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SelectableOption = React.createClass({
  render: function () {
    // returns undefined if sample has never been taken...
    var taken = this.props.taken || 0;
    //disables button if no more added
    var noneRemaining = (this.props.needed - taken) <= 0;
    return (
      <div className="sample-option-container">
        <label >
          <input disabled = {noneRemaining} className='input-radio' type='radio' name={this.props.indVarId} value={this.props.optionValue} />
          <span className="sample-option">{this.props.optionValue}</span>
        </label>
          <span className="samples-taken">{taken + '/' + this.props.needed}</span>
      </div>
    );
  }
});

var SelectableOptions = React.createClass({
  handleChange : function(event) {
    // anytime the radio button is changed, we write to the sample in the state
    this.props.actions.setIndVarOptionOnSample(this.props.sampleId,
                                               this.props.indVarId,
                                               event.target.value);
  },
  getOptions: function() {
    // creates an array of radio buttons
    var selectableOptions = [];
    _.each(this.props.options, function(optionValue, index) {
      var props = {
        optionValue : optionValue,
        optionIndex : index,
        indVarId  : this.props.indVarId,
        taken : this.props.samplesTaken[optionValue],
        needed: this.props.numSamplesPerOption
      };
      selectableOptions.push(<SelectableOption {...props}/>);
    }, this);
    return selectableOptions;
  },
  render: function() {
    // displays a form composed of radio buttons tied to sample and indVarId
    var options = this.getOptions();
      return (
        <div className="sample-container">
          <p className='sample-prompt'>Select a value for: <span className="option-name">{this.props.name}</span></p>
          <form onChange={this.handleChange}>
            {options}
          </form>
        </div>
      );
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SelectableOptions);
