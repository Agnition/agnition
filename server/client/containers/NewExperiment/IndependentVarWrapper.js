var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var bindActionCreators = require('redux').bindActionCreators;
var Immutable = require('immutable');
var Actions = require ('../../actions/IndependentVars');
var expActions = require('../../actions/Experiments');
Actions = _.extend(Actions,expActions);
var shortid = require('shortid');

//added in..
var IndependentVar = require('./IndependentVar');
var utils = require('../../utils/componentUtils');


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
var IndVarWrapper = React.createClass({
  components: [],
  genComponent: function(event){
    var indVarId = shortid.generate();
    this.props.actions.createIndVar(indVarId,this.props.expId);
    this.props.actions.addIndVar(indVarId);
    this.components.push(<IndependentVar indVarId = {indVarId} />);
    this.forceUpdate()
  },
  render: function(){
    // genComponent();
    return (
      <div>
        {this.components}
        <button onClick={this.genComponent} > add indvar </button>
      </div>
    )
  }
});


module.exports = connect(null, mapDispatchToProps)(IndVarWrapper);
