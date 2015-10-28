var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/IndVars');

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var IndVar = React.createClass({
  setName: function(event) {
    this.props.actions.setName(this.refs.name.value, this.props.indVarId);
  },
  setActionsPerTrial: function (event){
    this.props.actions.setActionsPerTrial(this.refs.actionsPerTrial.value, this.props.indVarId);
  },
  setNumTrials: function(event) {
      this.props.actions.setNumTrials(this.refs.numTrials.value, this.props.indVarId);
  },
  setRandomized: function(event) {
      this.props.actions.setRandomized(event.target.checked, this.props.indVarId);
  },
  pushOption: function(event){
    this.props.actions.pushOption(this.refs.option.value, this.props.indVarId);
    this.refs.option.value = '';
  },
  popOption: function(event){
    this.props.actions.popOption(this.refs.option.value, this.props.indVarId);
    this.refs.option.value = '';
  },
  render: function(){
    return (
      <div>
        <section className ='ind-var-input'>
          <div>
              Please enter your Ind Variable here.
          </div>

          <label>What should x be called?</label>
          <input ref="name" type="text"  onChange={this.setName}/>

          <label>How many times do you have to do x to see a change in y?</label>
          <input ref="actionsPerTrial" type="text" onChange={this.setActionsPerTrial}/>

          <label>How many times would you like to repeat each way you can do x?</label>
          <input ref="numTrials" type="text" onChange={this.setNumTrials}/>

          <label>Please randomize the events for me</label>
          <input ref="randomized" type="checkbox" onChange={this.setRandomized}/>

          <label>List Options For X</label>
          <input ref="option" type="text"/>
          <button onClick={this.pushOption}>Add an option</button>
          <button onClick={this.popOption}>Undo</button>
        </section>
      </div>
    )
  }
})

module.exports = connect(null, mapDispatchtoProps)(IndVar);
