// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;

var bindActionCreators = require('redux').bindActionCreators;

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
      <div className="subsection-block">
      <h4>Numeric Measure</h4>
      <p className="question">What is the unit for this measure?</p>
        <label>
          unit
          <input className="input-number" ref="unit" type="text" value={this.props.unit} onChange={this.setUnit} />
        </label>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureNumeric);
