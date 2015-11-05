var React = require('react');
var DepVar = require('./DepVar');
var IndVar = require('./IndVar');
var connect = require('react-redux').connect;
var Actions = require('../../actions/Samples');
var bindActionCreators = require('redux').bindActionCreators;
var History = require('react-router').History;
var Link = require('react-router').Link;
var utils = require('../../utils/componentUtils');
var ChartWrapper = require('../../containers/AnalyzeExperiment/MeasureNumeric/OptionList/ChartWrapper');
var ExpBasics = require('../../containers/NewExperiment/components/ProgressHypothesis');


function mapStateToProps (state, ownProps) {
  var exp = state.Experiments.get(ownProps.params.expid).toJS();
  var indVarId = exp.indVars[0];
  var depVarId = exp.depVars[0];
  var measureId = state.DepVars.get(depVarId).get('measures').get(0);

  return {
    exp: exp,
    indVarId: indVarId,
    measureId: measureId,
  };
}

var ClosedExp = React.createClass({
  render: function(){
    return( 
      <div>
        <div className="container">
          <div className="row">
            <section className = "subsection-v col-md-8 col-md-offset-2">
              <h2 className='section-title'> {this.props.exp.name + " Summary"} </h2>
              <section className = "subsection-v">
                <h3 className= 'subsection-title'>Initial Hypothesis</h3>
                <ExpBasics expId={this.props.exp._id} />
              </section>
              <section className = "subsection-v">
                <h3 clasName='subsection-title'>Final Results</h3>
                <ChartWrapper measureId={this.props.measureId} indVarId={this.props.indVarId} />
              </section>
            </section>
          </div>
        </div>
      </div>
      )
  }
})



module.exports = connect(mapStateToProps)(ClosedExp);
