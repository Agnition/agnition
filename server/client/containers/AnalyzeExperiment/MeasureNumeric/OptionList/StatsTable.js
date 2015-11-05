//reqs...measureValue
var React = require('react');
var _ = require('underscore');
var statsUtils = require('../../../../utils/stats');

var StatsRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.option}</td>
        <td>{Math.min.apply(null, this.props.values)}</td>
        <td>{Math.max.apply(null, this.props.values)}</td>
        <td>{statsUtils.getMean(this.props.values).toFixed(1)}</td>
        <td>{statsUtils.getStandardDeviation(this.props.values).toFixed(1)}</td>
        <td>{this.props.values.length}</td>
      </tr>
    );
  }
});

var StatsTable = React.createClass({
  render: function() {
    var rows = _.map(this.props.samples, function(values, option) {
      return <StatsRow option={option} values={values} />;
    });
    return (
      <div className="chart-container">
      <h4 className='subsection-title-sm'>Summary Table</h4>
        <table className = 'data-table'>
          <thead>
            <tr>
              <td>Option</td>
              <td>Min</td>
              <td>Max</td>
              <td>Average</td>
              <td>Std. Dev.</td>
              <td>Sample Size</td>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

// export chart
module.exports = StatsTable;
