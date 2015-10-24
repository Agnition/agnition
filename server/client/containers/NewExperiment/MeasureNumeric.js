// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

var MeasureActions = require('../../actions/Measures');

function mapStatetoProps (state, ownProps) {
  return {
    unit: state.Measures.getIn([ownProps.measureId, 'unit']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(MeasureActions, dispatch)
  };
}

var MeasureNumeric = React.createClass({

  setUnit: function () {
    this.props.actions.setUnit(this.refs.unit.value, this.props.measureId);
  },

  render: function () {

    return (
      <div>
        <label>
          Choose Unit<input ref="unit" type="text" value={this.props.unit} onChange={this.setUnit} />
        </label>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureNumeric);
