var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/Samples');
var SelectableOptions = require('./SelectableOptions');

// var mapStateToProps = function (state, ownProps) {
//   return {
//     indVarIds: state.independentVars.get(ownProps.expId).toJS().independentVars
//   };
// };

// var mapDispatchToProps = function (dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   };
// };

var SelectNonRandomOptions = React.createClass({
  getSelectableOptions: function () {
    var selectableOptions = [];
    _.each(this.props.indVarIds, function(indVarid){
      var props = {
        indVarId: indVarid,
        sampleId: this.props.sampleId
      };
      selectableOptions.push(<SelectableOptions {...props}/>)
    }, this)

    return selectableOptions;
  },
  render: function () {
    console.log('%c--> here 2;' + this.props.indVarIds , 'font-size:15px; padding-right:20px; color:white; background-color: black');﻿
    var selectableOptions = this.getSelectableOptions();
    return (
      <div>
      {selectableOptions}
      </div>
    )
  }
})

module.exports = connect(null, null)(SelectNonRandomOptions)

// <SelectableOptions sampleId={'sampleID!'} indVarId={'562a8aab8ca3941d9570680b'} />
