var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/IndependentVars');

function mapStateToProps (state, ownProps) {

}


function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var SelectOptions = React.createClass({
  render: function() {
    <div>
      <div>
        {indVars}
      </div>
      <button> run experiment </button>
    </div>
  }
});
