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
  onKey : function (event) {
    if(event.which === 13) {
      this.addItem();
    }
  },

  componentDidUpdate: function() {
    this.checkValidity();
  },

  componentDidMount: function() {
    this.checkValidity();
  },

  checkValidity: function() {
    if (this.props.list.size >= 2) {
      this.props.actions.setValidity(true);
    } else {
      this.props.actions.setValidity(false);
    }
  },

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
      return (<div className="categories">
          {item}
          <button className="remove-button" onClick={this.removeItem} value={item}>Remove</button>
        </div>);
    }.bind(this));

    return (
      <div className="question-set">
        <h4 className="subsection-title-sm">Categories</h4>
        <p question="question">
          What are your categories?
        </p>
        <div className="add-category">
          <input placeholder="Mad / Glad / Focused" className="input-text" ref="newItem" type="text" onKeyDown={this.onKey}/>
          <button className="set-button" onClick={this.addItem}>Add item</button>
        </div>
        {categories}
      </div>
      );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(MeasureList);
