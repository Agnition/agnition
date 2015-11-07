var React = require('react');
var DepVar = require('./DepVar');
var IndVar = require('./IndVar');
var connect = require('react-redux').connect;
var Actions = require('../../actions/Samples');
var bindActionCreators = require('redux').bindActionCreators;
var History = require('react-router').History;
var Link = require('react-router').Link;
var ChartWrapper = require('../../containers/AnalyzeExperiment/MeasureNumeric/OptionList/ChartWrapper.js');
var utils = require('../../utils/componentUtils');
var dataTransforms = require('../../utils/dataTransforms.js');

function mapStateToProps (state, ownProps) {
  var expId = ownProps.params.expid;
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

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var ViewExp = React.createClass({
  mixins: [ History ],
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <section className="subsection-v view-exp col-md-6 col-md-offset-3">
            {/* name as header */}
            <h2 className='section-title'>{this.props.exp.name}</h2>
            <div className="view-exp-container">
            <p className='guide'>You have submitted {this.props.samplesSubmitted} samples out of the required {this.props.samplesNeeded}</p>
            <h3 className="subsection-title">Hypothesis:</h3>
            <div className='definition-set'>
              <p className="definition">{this.props.exp.hypothesis}</p>
            </div>
            <div className="subsection-v">
              <h3 className='subsection-title'>Cause: {this.props.exp.cause}</h3>
              <IndVar indVars = {this.props.exp.indVars} />
            </div>
            <div className="subsection-v">
              <h3 className='subsection-title'>Effect: {this.props.exp.effect}</h3>
              <DepVar depVarIds = {this.props.exp.depVars} />
            </div>
            <button className='set-button'><Link to={'/sample/' + this.props.exp._id + '/adhoc'}>Add Sample</Link></button>
            </div>
          </section>
        </div>
      </div>
    );
  }

  //
  // <IndVar indVar = {this.props.exp.IndVar[0]} />
});

module.exports = connect(mapStateToProps, mapDispatchtoProps)(ViewExp);
