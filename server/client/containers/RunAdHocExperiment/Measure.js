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
  getInitialState: function() {
    return {
      scaleValue: 3
    };
  },
  scaleChanged: function() {
    this.setState({scaleValue: this.refs.scale.value});
  },
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
      return (<div>
                <input
                  type="range"
                  max="5"
                  min="1"
                  step="0.5"
                  ref="scale"
                  name={'measures[' + this.props.measureId + '][value]'}
                  onChange={this.scaleChanged}
                  />
                {this.state.scaleValue}
               </div>);
    }
    return (
      <div>
        {input}
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps)(Measure);
