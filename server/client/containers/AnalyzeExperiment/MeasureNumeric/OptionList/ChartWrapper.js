//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../../../utils/componentUtils');
var sampleUtils = require('../../../../utils/sampleUtils');

var AnovaResult = require('./AnovaResult');
var BarChart = require('./BarChart');
var StatsTable = require('./StatsTable');
var HistogramWrapper = require('./HistogramWrapper');

// componet that takes in indvarID + measureID
var mapStateToProps = function(state, ownProps) {
  var samples = utils.getSamplesForMeasure(state, ownProps.measureId, ownProps.indVarId);
  return {
    indVarName : samples.indVarName,
    indVar : state.IndVars.get(ownProps.indVarId).toJS(),
    measure : state.Measures.get(ownProps.measureId).toJS(),
    samples : samples,
  };
};

var ChartWrapper = React.createClass({
  render: function() {
    var samples = sampleUtils.getValues(this.props.samples.samples);
    return (
      <div>
        <AnovaResult samples={samples} />
          <StatsTable samples={samples} />
          <BarChart samples={this.props.samples} indVar={this.props.indVar} measure={this.props.measure} />
        <HistogramWrapper samples={samples} bins={10} measure = {this.props.measure} indVar = {this.props.indVar} />
      </div>
    );
  }
});

// export chart
module.exports = connect(mapStateToProps)(ChartWrapper);
