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

var Basis = React.createClass({
  elements: [],
  componentWillMount: function() {
    var kind = this.props.measure.kind;
    this.elements = [];
    //build the spans
    if(kind === 'numeric') {
      //no iteration nessecary for numeric...
      this.elements.push(
        <div className='definition-set'>
          <span className='definition-label'>Unit: </span> 
          <span className='definition'>{this.props.item}</span>
        </div>)
     } else if(kind === 'list') {
      //iterate through list and add category labels
      this.elements = _.map(this.props.item, function(definition, i) { 
        i++; //start at item 1 not item 0
        return (
          <div className='definition-set'>
            <span className='definition-label'>{"Category " + i + ": "}</span>
            <span className='definition'>{definition}</span>
          </div> 
        )
      }, this);
    } else if (kind === 'qualitative') {
      this.elements.push(
          <div className='definition-set'>
            <span className='definition-label'>{"1: "}</span>
            <span className='definition'>{this.props.measure.scaleDescriptionMin}</span>
          </div>)
      this.elements.push( 
          <div className='definition-set'>
            <span className='definition-label'>{"3: "}</span>
            <span className='definition'>{this.props.measure.scaleDescriptionMiddle}</span>
          </div>)
      this.elements.push(
          <div className='definition-set'>
            <span className='definition-label'>{"5: "}</span>
            <span className='definition'>{this.props.measure.scaleDescriptionMax}</span>
          </div> 
        )
    }
  },
  render: function() {
    return (
      <div>
        {this.elements}
      </div>
    )
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
    var bases = <Basis item={basis} measure={this.props.measure}/>;
    return (
        <div>
          {bases}
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
