// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('lodash');

function mapStatetoProps (state, ownProps) {
  return {
    kind: state.Measures.getIn([ownProps.measureId, 'kind']),
    unit: state.Measures.getIn([ownProps.measureId, 'unit']),
    list: state.Measures.get(ownProps.measureId).toJS().list,
    scale: _.range(1, 5, 0.5),
  };
}

var Measure = React.createClass({
  render: function () {
    var input;
    if (this.props.kind === 'numeric') {
      input = (<span>
                <input type="number" name={'measures[' + this.props.measureId + '][value]'} />
              </span>);
    } else if (this.props.kind === 'list') {
      input = this.props.list.map(function(item) {
        return (<span>
                  <input
                    type="radio"
                    name={'measures[' + this.props.measureId + '][value]'}
                    value={item} />{item}
                </span>);
      }.bind(this));
    } else if (this.props.kind === 'qualitative') {
      input = this.props.scale.map(function(item) {
        return (<span>
                  <input
                    type="radio"
                    name={'measures[' + this.props.measureId + '][value]'}
                    value={item} />{item}
                </span>);
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
