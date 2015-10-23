// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

// import actions
var MeasureActions = require('../../actions/Measures');
var Actions = _.extend(MeasureActions);

function mapStatetoProps (state, ownProps) {
  return {
    unit: state.Measures.getIn([ownProps.measureId, 'unit']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var MeasureNumeric = React.createClass({

  render: function () {

    return (
      <div>
      Numeric
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureNumeric);
