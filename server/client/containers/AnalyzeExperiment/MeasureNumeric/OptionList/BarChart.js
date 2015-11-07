//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var utils = require('../../../../utils/componentUtils');
var BarChart = require('../../../../../../lib/react-d3').BarChart;

var Chart = React.createClass({
    genChartData : function() {
        return [{
            name: this.props.measure.id,
            values: utils.genSingleSeriesBarChartValues(this.props.indVar.options, this.props.samples.samples)
        }];
    },
    render: function() {
        return (
            <div className='chart-container-bar'>
                <BarChart data={this.genChartData()} width={600} height={300} title={"Average " + this.props.measure.name  + " at each " + this.props.indVar.name} yAxisLabel={this.props.measure.name} xAxisLabel={this.props.indVar.name} />
            </div>
        );
    }
});

// export chart
module.exports = Chart;
