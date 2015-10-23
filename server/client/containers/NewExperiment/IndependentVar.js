var React = require('react');
var connect = require('react-redux').connect;
var _ = require('underscore');
var Immutable = require('immutable');
var bindActionCreators = require('redux').bindActionCreators;
var IndVarActions = require ('../../actions/IndependentVars');
var Actions = _.extend(NewExperimentActions, IndVarActions);

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

var IndVar = React.createClass({
  handleChange: function(event) {
    console.log("------------------------------------------event-",event);
    var id = this.props.indVarId;
    this.props.actions.setName(this.refs.name.value, id);
    this.props.actions.setActionsPerTrial(this.refs.actionsPerTrial.value, id);
    this.props.actions.setNumTrials(this.refs.numTrials.value, id);
    this.props.actions.setRandomized(this.refs.randomized.value, id);
    this.props.actions.pushOption(this.refs.option.value, id);
  },
  render: function(){
    return (
      <div>
        <section class ='indvar-input'>
          <div>
              Please enter your Independent Variable here.
          </div>

          <label>What should x be called?</label>
          <input ref="name" type="text" value={this.props.name} onChange={this.handleChange}/>

          <label>How many times do you have to do x to see a change in y?</label>
          <input ref="actionsPerTrial" type="text" value={this.props.actionsPerTrial} onChange={this.handleChange}/>
          
          <label>How many times would you like to repeat each way you can do x?</label>
          <input ref="numTrials" type="text" value={this.props.numTrials} onChange={this.handleChange}/>
          
          <label>Would you like us to randomly to select the option for you?</label>
          <input ref="randomized" type="text" value={this.props.randomized} onChange={this.handleChange}/>
          
          <label>List Options For X</label>
          <input ref="option" type="text" value={this.props.optionValue} onChange={this.addOption}/>

        </section>
        <section>
          <IndVar indVarIds = {[this.props.indVarId]} />
        </section>
      </div>
    )
  }
})

module.exports = connect(null, mapDispatchtoProps)(IndVar);
