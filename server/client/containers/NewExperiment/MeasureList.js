// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');

var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');

var MeasureActions = require('../../actions/Measures');

function mapStatetoProps (state, ownProps) {
  return {
    list: state.Measures.getIn([ownProps.measureId, 'list']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(MeasureActions, dispatch)
  };
}

var MeasureList = React.createClass({

  addItem: function () {
    this.props.actions.addListItem(this.refs.newItem.value, this.props.measureId);
    this.refs.newItem.value = '';
  },

  removeItem: function (event) {
    event.preventDefault();
    this.props.actions.removeListItem(event.target.value, this.props.measureId);
  },

  render: function () {
    var categories = this.props.list.map(function(item) {
      return (<div>
          {item}
          <button onClick={this.removeItem} value={item}>remove item</button>
        </div>);
    }.bind(this));

    return (
      <div>
        <h4>Categories</h4>
        {categories}
        <input ref="newItem" type="text" />
        <button onClick={this.addItem}>Add item</button>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureList);
