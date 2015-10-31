//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../../../utils/sampleUtils.js');
var AreaChart = require("react-d3").AreaChart;


var HistogramWrapper = React.createClass({
    componentWillMount : function() {
        this.genChartHistograms();

    },
    genChartHistograms : function() {
        var minValue = 0;
        var maxValue = 0;
        var maxFreq = 0;
        var chartData = _.map(this.props.datasets, function(values, key){
            var histogram = utils.genHistogram(this.props.bins, values);
            minValue = Math.min(histogram.min, minValue);
            maxValue = Math.max(histogram.max, maxValue);
            maxFreq = Math.max(histogram.maxFreq, maxFreq);
            return  { data : {name: 'a name', values: histogram.coordinates}, label: key};
        }, this);

        this.histograms = _.map(chartData, function(dataObj, index) {
            console.log("------------------------------------------Max Freq-", maxFreq);
            return <AreaChart
                      data= {dataObj.data}
                      yScale = {[0, maxFreq]}
                      xScale = {[minValue, maxValue]}
                      width={500}
                      height={300}
                      viewBoxObject={{
                        x: 0,
                        y: 0,
                        height: 400,
                        width: 500
                      }}
                      xAxisTickInterval={{unit: 'frequency', interval: 1}}
                      title = {dataObj.label} />

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


