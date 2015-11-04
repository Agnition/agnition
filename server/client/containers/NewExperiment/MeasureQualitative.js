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
      <div className="question-set">
        <h4 className="subsection-title-sm">Scale from 1-5</h4>
        <p className="guide">
          What scale would you use to measure this?
        </p>
        <div className="question-set">
          <p className="question">What is a 1 on your scale?</p>
          <input className="input-text" ref="minDescription" onChange={this.setMinDescription}/>
        </div>
        <div className="question-set">
          <p className="question">What is a 3 on your scale?</p>
          <input className="input-text" ref="middleDescription" onChange={this.setMiddleDescription}/>
        </div>
        <div className="question-set">
          <p className="question">What is a 5 on your scale?</p>
          <input className="input-text" ref="maxDescription" onChange={this.setMaxDescription}/>
        </div>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureQualitative);
