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
    scale: state.Measures.getIn([ownProps.measureId, 'scale']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var MeasureQualitative = React.createClass({

  render: function () {

    return (
      <div>
      Qualitative
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureQualitative);
