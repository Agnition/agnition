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
      <div className="subsection-block">
        <h4>Scale from 1-5</h4>
        <div>
          <label>min description
            <input className="input-text" ref="minDescription" onChange={this.setMinDescription}/>
          </label>
        </div>
        <div>
          <label>mid description
          <input className="input-text" ref="middleDescription" onChange={this.setMiddleDescription}/>
          </label>
        </div>
        <div>
          <label>max description
          <input className="input-text" ref="maxDescription" onChange={this.setMaxDescription}/>
          </label>
        </div>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureQualitative);
