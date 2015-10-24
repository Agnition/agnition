// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

var MeasureActions = require('../../actions/Measures');

function mapStatetoProps (state, ownProps) {
  return {
    scale: state.Measures.getIn([ownProps.measureId, 'scale']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(MeasureActions, dispatch)
  };
}

var MeasureQualitative = React.createClass({

  setScale: function () {
    var vals = [];
    var step = Number(this.refs.step.value);
    var max = Number(this.refs.max.value);
    var min = Number(this.refs.min.value);
    for (var i = min; i <= max; i += step) {
      vals.push(i);
    }
    this.props.actions.setScale(vals, this.props.measureId);
  },

  componentWillMount: function() {

  },

  render: function () {
    return (
      <div>
        <label>Experiment Name</label>
        Min
        <input ref="min" type="text" />
        Max
        <input ref="max" type="text" />
        Step
        <input ref="step" type="text" />
        <p>
        Current scale :
          {JSON.stringify(this.props.scale)}
        </p>
        <button onClick={this.setScale}>save measure</button>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureQualitative);
