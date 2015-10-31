// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;

var bindActionCreators = require('redux').bindActionCreators;

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

  setMinDescription: function() {
    this.props.actions.setScaleDescriptionMin(
      this.refs.minDescription.value,
      this.props.measureId
    );
  },
  setMiddleDescription: function() {
    this.props.actions.setScaleDescriptionMiddle(
      this.refs.middleDescription.value,
      this.props.measureId
    );
  },
  setMaxDescription: function() {
    this.props.actions.setScaleDescriptionMax(
      this.refs.maxDescription.value,
      this.props.measureId
    );
  },

  render: function () {
    return (
      <div>
        <p>
        Scale from 1-5
        </p>
        Min description :
        <input ref="minDescription" onChange={this.setMinDescription}/>
        Middle description :
        <input ref="middleDescription" onChange={this.setMiddleDescription}/>
        Max description :
        <input ref="maxDescription" onChange={this.setMaxDescription}/>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureQualitative);
