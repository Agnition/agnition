var React = require('react');
var _ = require('underscore');
var connect = require('react-redux').connect;
var utils = require('../../utils/componentUtils');

//decides what to present as the unit the measure comes in.
//will look a bit ugly but enough to keep moving


function mapStateToProps (state, ownProps) {
  //temp only returns one measure..
  return {
   measure: utils.mapIdsToObjs(ownProps.depVarIds, state.DepVars)[0],
  };
}

var BasisSpan = React.createClass({
  render: function() {
      return (
        <span className='basis'>{this.props.item}</span>
      );
    }
});

var Measure = React.createClass({
  getBasis: function(measure) {
    if(measure.kind === 'numeric'){
      return measure.unit;
    } else if (measure.kind === 'qualitative'){
      return measure.list;
    } else {
      return measure.scale;
    }
  },
  render: function() {
    var basis = this.getBasis(this.props.measure);
    var spans = [];
    _.each(basis, function(item){
      spans.push(<BasisSpan item={item} />)
    });
    return (
      <div>
        <h3>{this.props.measure.kind}</h3>
        <span>{spans}</span>
      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(Measure);
