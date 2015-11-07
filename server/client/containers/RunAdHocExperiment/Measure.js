// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('lodash');

function mapStatetoProps (state, ownProps) {
  return {
    kind: state.Measures.getIn([ownProps.measureId, 'kind']),
    unit: state.Measures.getIn([ownProps.measureId, 'unit']),
    list: state.Measures.get(ownProps.measureId).toJS().list,
    scaleMin: state.Measures.getIn([ownProps.measureId, 'scaleDescriptionMin']),
    scaleMid: state.Measures.getIn([ownProps.measureId, 'scaleDescriptionMiddle']),
    scaleMax: state.Measures.getIn([ownProps.measureId, 'scaleDescriptionMax']),

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
      input = (<span className = 'input-button'>
                <input type="number"  step="0.01" name={'measures[' + this.props.measureId + '][value]'} />
              <span className="measure-unit">{this.props.unit}</span></span>);
    } else if (this.props.kind === 'list') {
      input = this.props.list.map(function(item) {
        return (<span className ='input-radio'>
                  <input
                    type="radio"
                    name={'measures[' + this.props.measureId + '][value]'}
                    value={item} />{item}
                </span>);
      }.bind(this));
    } else if (this.props.kind === 'qualitative') {
      return (<div className="input-slider">
                <div>
                  <input
                    type="range"
                    max="5"
                    min="1"
                    step="0.5"
                    ref="scale"
                    name={'measures[' + this.props.measureId + '][value]'}
                    onChange={this.scaleChanged}
                    />
                </div>
                <div>
                  <label>{this.props.scaleMin}</label>
                  <label>{this.props.scaleMid}</label>
                  <label>{this.props.scaleMax}</label>
                </div>
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
