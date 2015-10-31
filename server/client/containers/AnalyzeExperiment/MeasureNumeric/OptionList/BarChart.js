//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../../../utils/componentUtils');
var BarChart = require("react-d3").BarChart;

// componet that takes in indvarID + measureID
var mapStateToProps = function(state, ownProps){
    var samples = utils.getSamplesForMeasure(state, ownProps.measureId, ownProps.indVarId);
    return {
        indVar : state.IndVars.get(ownProps.indVarId).toJS(),
        measure : state.Measures.get(ownProps.measureId).toJS(),
        samples : samples,
    };
};

var Chart = React.createClass({
    genChartData : function() {
        return [{
            name: this.props.measure.id,
            values: utils.genSingleSeriesBarChartValues(this.props.indVar.options, this.props.samples.samples)
        }];
    },
    render: function() {
        return (
            <div>
                <BarChart data={this.genChartData()} width={500} height={300} title="Bar Chart" yAxisLabel={this.props.measure._id} xAxisLabel={this.props.indVar.name} />
            </div>
        );
    }
});

// export chart
module.exports = connect(mapStateToProps)(Chart);
