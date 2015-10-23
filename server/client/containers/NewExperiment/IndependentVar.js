var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require ('../../actions/IndependentVars');

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var IndVar = React.createClass({
  handleChange: function(event) {
    var id = this.props.indVarId;
    this.props.actions.setName(this.refs.name.value, id);
    this.props.actions.setActionsPerTrial(this.refs.actionsPerTrial.value, id);
    this.props.actions.setNumTrials(this.refs.numTrials.value, id);
    this.props.actions.setRandomized(this.refs.randomized.value, id);
  },
  pushOption: function(event){
    this.props.actions.pushOption(this.refs.option.value, this.props.indVarId);
  },
  popOption: function(event){
    this.props.actions.popOption(this.refs.option.value, this.props.indVarId);
  },
  render: function(){
    return (
      <div>
        <section className ='indvar-input'>
          <div>
              Please enter your Independent Variable here.
          </div>

          <label>What should x be called?</label>
          <input ref="name" type="text" value={this.props.name} onChange={this.handleChange}/>

          <label>How many times do you have to do x to see a change in y?</label>
          <input ref="actionsPerTrial" type="text" onChange={this.handleChange}/>
          
          <label>How many times would you like to repeat each way you can do x?</label>
          <input ref="numTrials" type="text" onChange={this.handleChange}/>
          
          <label>Would you like us to randomly to select the option for you?</label>
          <input ref="randomized" type="text" onChange={this.handleChange}/>
          
          <label>List Options For X</label>
          <input ref="option" type="text"/>
          <button onClick={this.pushOption}>Add an option</button>
          <button onClick={this.popOption}>Undo</button>
        </section>
        <section>

        </section>
      </div>
    )
  }
})

// onChange={this.handleChange}
          // <IndVar indVarIds = {[this.props.indVarId]} />

module.exports = connect(null, mapDispatchtoProps)(IndVar);
