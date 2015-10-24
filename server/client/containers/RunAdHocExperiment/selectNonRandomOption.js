var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/Samples');

var mapStateToProps = function (state, ownProps) {
  //not yet mapping from state...
  return {
    options : state.IndependentVars.get(ownProps.indVarId)
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

var SelectableOption = React.createClass ({
  render: function () {
    return (
      <label>
        <input type="radio" name={this.props.indVarId} value={this.props.optionIndex} onChange = {this.handleChange} />
        {this.props.optionValue}
      </label>
    )
  }
});

var SelectOption = React.createClass({
  handleChange : function(event) {
    console.log(event.target.value);
    this.props.actions.setIndVarOptionOnSample(this.props.sampleId, this.props.indVarId, event.target.value);
  },
  getOptions: function(){
    var selectableOptions = [];
    _.each(this.props.options, function(optionValue, index) {
      var props = { 
        optionValue : optionValue,
        optionIndex : index,
        indVarId  : this.props.indVarId,
      }
      console.log('%c--> ' + props.indVarId , 'font-size:15px; padding-right:20px; color:white; background-color: black');﻿
      selectableOptions.push(<SelectableOption {...props}/>)
    },this);
    return selectableOptions;
  },
  render: function() {
    var options = this.getOptions();
      return (
      <form onChange={this.handleChange}>
      {options}
      </form>
      )
  }
});

module.exports = connect(null, mapDispatchToProps)(SelectOption);
