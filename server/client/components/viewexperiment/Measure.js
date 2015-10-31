var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../utils/componentUtils');

// decides what to present as the unit the measure comes in.
// will look a bit ugly but enough to keep moving


function mapStateToProps (state, ownProps) {
  return {
   measures: utils.mapIdsToObjs(ownProps.measureIds, state.Measures),
  };
}

var BasisSpan = React.createClass({
  render: function() {
      return (
        <span className="basis">{this.props.item}</span>
      );
    }
});

var Measure = React.createClass({
  getBasis: function(measure) {
    if (measure.kind === 'numeric') {
      return measure.unit;
    }
    if (measure.kind === 'qualitative') {
      return _.range(1, 5, 0.5);
    }
    return measure.list;
  },
  render: function() {
    var basis = this.getBasis(this.props.measure);
    var spans = <BasisSpan item={basis} />;
    return (
      <div>
        <h3>{this.props.measure.kind}</h3>
        <span>{spans}</span>
      </div>
    );
  }
});

var Measures = React.createClass({
  render: function() {
    var measures = _.map(this.props.measures, function(measure) {
      return <Measure measure = {measure} />;
    });
    return (
      <div>
        {measures}
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(Measures);
