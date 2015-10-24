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
    var max = Number(this.refs.max.value);
    for (var i = 0; i <= max; i++) {
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
        Max
        <input ref="max" type="text" />
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
