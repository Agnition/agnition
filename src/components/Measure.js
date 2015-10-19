var React = require('react');

//decides what to present as the unit the measure comes in.
//will look a bit ugly but enough to keep moving
var basis = (function(measure) {
  if(measure.kind === 'numeric'){
    return measure.unit;
  } else if (measure.kind === 'qualitative'){
    return measure.list;
  } else {
    return measure.scale;
  }

})(this.props.measure);


var Measure = React.createClass({
  render: function() {
    return (
      <div>
      //name as header
        <h3>{this.props.kind}</h3>
        <span>{basis}</span>
        // <Samples samples = {this.props.measure.samples} />
      </div>
    );
  }
});

module.exports = Measure;