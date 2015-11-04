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
      <div className="question-set">
        <h4 className="subsection-title-sm">Unit</h4>
        <p className="question">What unit will your measure this in?</p>
        <input className="input-number" ref="unit" type="text" value={this.props.unit} onChange={this.setUnit} />
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureNumeric);
