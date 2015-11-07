//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../../../utils/sampleUtils.js');
var AreaChart = require('../../../../../../lib/react-d3').AreaChart;


var HistogramWrapper = React.createClass({
  componentWillMount : function() {
    this.genChartHistograms();

  },
  genChartHistograms : function() {
    //concat all the samples to find the min and max for min sizing
    var allSamples = _.reduce(this.props.samples, function(memo, array){
      return memo.concat(array);
    });
    var minValue = Math.floor(Math.min.apply(null, allSamples));
    var maxValue = Math.ceil(Math.max.apply(null, allSamples));

    //set max freq
    var maxFreq = 0;
    var chartData = _.map(this.props.samples, function(values, key){
      var histogram = utils.genHistogram(this.props.bins, values, minValue, maxValue);
      maxFreq = Math.max(histogram.maxFreq, maxFreq);
      return  { data : {name: 'a name', values: histogram.coordinates}, label: this.props.indVar.name + ": " + key, };
    }, this);

    this.histograms = _.map(chartData, function(dataObj, index) {
      return (<div className = "chart-container-histogram">
        <AreaChart
          data= {dataObj.data}
          yScale = {[0, maxFreq]}
          xScale = {[minValue, maxValue]}
          width={500}
          height={300}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 600,
            height: 300
          }}
          yAxisLabel = {"Frequency"}
          xAxisLabel = {this.props.measure.name}
          xAxisTickInterval={{unit: 'frequency', interval: 1}}
          title = {dataObj.label} />
      </div>)

    }, this);
  },
  histograms  : [],
  render: function() {
    return (
      <div>
      {this.histograms}
      </div>
    );
  }
});

// export chart
module.exports = HistogramWrapper;
