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
    list: state.Measures.getIn([ownProps.measureId, 'list']),
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var MeasureList = React.createClass({

  addListItem: function () {
    this.props.actions.addListItem(this.refs.listItem.value, this.props.measureId);
  },

  render: function () {

    console.log(this.props.list);
    return (
      <div>
        <input ref="listItem" type="text" />
        <button onClick={this.addListItem}>add list item</button>
        <div>
          { this.props.list.map(function(item) {
              return <div>{item}</div>
            })
          }
        </div>
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureList);
