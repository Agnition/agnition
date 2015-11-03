var React = require('react');
var DepVar = require('./DepVar');
var IndVar = require('./IndVar');
var connect = require('react-redux').connect;
var shortId = require('shortid');
var Actions = require('../../actions/Samples');
var bindActionCreators = require('redux').bindActionCreators;
var History = require('react-router').History;
var Link = require('react-router').Link;
var ChartWrapper = require('../../containers/AnalyzeExperiment/MeasureNumeric/OptionList/ChartWrapper.js');
var utils = require('../../utils/componentUtils');

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
    indVarId: indVarId,
    measureId: measureId,
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
  createSample: function(e){
    var id = shortId.generate();

    //instantiate a new sample with ID
    this.props.actions.createSample(id);

    //re-direct
    this.history.pushState(null, '/sample/' + this.props.exp._id + '/' + id + '/adhoc/setup');
  },
  render: function() {
    return (
      <div className = 'section-block'>
        {/* name as header */}
        <h2 className='section-title'>{this.props.exp.name}</h2>
        <div className='definition-set'>
          <span className='definition-label'>Hypothesis: </span>
          <span className='definition'>{this.props.exp.hypothesis}</span>
        </div>
        <span className='guide'>You have submitted {this.props.samplesSubmitted} samples out of the required {this.props.samplesNeeded}</span>
        <h3 className='subsection-title'>Dependent Variables</h3>
        <DepVar depVarIds = {this.props.exp.depVars} />
        <h3 className='subsection-title'>Independent Variables</h3>
        <IndVar indVars = {this.props.exp.indVars} />
        <button className='set-button'><Link to={'/sample/' + this.props.exp._id + '/adhoc'}>Add Sample</Link></button>
        <ChartWrapper measureId={this.props.measureId} indVarId={this.props.indVarId} />
      </div>
    );
  }

  //
  // <IndVar indVar = {this.props.exp.IndVar[0]} />
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(ViewExp);
