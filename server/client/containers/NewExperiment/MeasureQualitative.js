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

  componentWillMount: function() {
    this.props.actions.setScale([1, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0], this.props.measureId);
  },

  render: function () {
    return (
      <div>
        <p>
        Scale from 1-5
        </p>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureQualitative);
