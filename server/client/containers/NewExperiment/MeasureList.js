// import React and Redux dependencies
var React = require('react');
var connect = require('react-redux').connect;

var bindActionCreators = require('redux').bindActionCreators;

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
          <button className="remove-button" onClick={this.removeItem} value={item}>remove</button>
        </div>);
    }.bind(this));

    return (
      <div className="subsection-block">
        <h4>Categories</h4>
        <input className="input-text" ref="newItem" type="text" />
        <button className="set-button" onClick={this.addItem}>Add item</button>
        {categories}
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureList);
