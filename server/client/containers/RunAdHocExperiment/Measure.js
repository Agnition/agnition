// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;

function mapStatetoProps (state, ownProps) {
  return {
    kind: state.Measures.getIn([ownProps.measureId, 'kind']),
    unit: state.Measures.getIn([ownProps.measureId, 'unit']),
    list: state.Measures.get(ownProps.measureId).toJS().list,
    scale: state.Measures.get(ownProps.measureId).toJS().scale,
  };
}

var Measure = React.createClass({
  render: function () {
    var input;
    if (this.props.kind === 'numeric') {
      input = <span><input type="number" name={this.props.measureId} /></span>;
    } else if (this.props.kind === 'list') {
      input = this.props.list.map(function(item) {
        return <span><input type="radio" name={this.props.measureId} value={item} />{item}</span>;
      }.bind(this));
    } else if (this.props.kind === 'qualitative') {
      input = this.props.scale.map(function(item) {
        return <span><input type="radio" name={this.props.measureId} value={item} />{item}</span>;
      }.bind(this));
    }
    return (
      <div>
        {input}
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(Measure);
