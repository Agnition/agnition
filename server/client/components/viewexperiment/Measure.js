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
    var kind = this.props.kind;
    //set the correct label for the measure

    
    var label = "Unit";
    if(kind === 'qualitative'){
      label = "Scale";
    } else if (kind === 'list'){
      label = "Category";
    }

    //build the spans
    if(kind === 'numeric') {
      //no iteration nessecary for numeric...
     this.elements.push(
        <div className='definition-set'>
          <span className='definition-label'>{label + ": "} </span> 
          <span className='definition'>{this.props.item}</span>
        </div>
      )
     } else {
      this.elements = _.map(this.props.item, function(definition, i) {
        //start at item 1 not zero
        i++;
        return (
          <div className='definition-set'>
            <span className='definition-label'>{label + " " + i + ": "}</span>
            <span className='definition'>{definition}</span>
          </div> 
        )
      }, this);
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
    var basies = <Basis item={basis} kind={this.props.measure.kind}/>;
    return (
        <div>
          {basies}
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
