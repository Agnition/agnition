var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require('../../actions/IndVars');

function mapStatetoProps (state, ownProps) {
  return {
    options: state.IndVars.getIn([ownProps.indVarId, 'options']).toJS()
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

var IndVar = React.createClass({
  setName: function() {
    this.props.actions.setIndVarName(this.refs.name.value, this.props.indVarId);
  },
  setActionsPerTrial: function () {
    this.props.actions.setActionsPerTrial(this.refs.actionsPerTrial.value, this.props.indVarId);
  },
  setNumTrials: function() {
      this.props.actions.setNumTrials(this.refs.numTrials.value, this.props.indVarId);
  },
  setRandomized: function(event) {
      this.props.actions.setRandomized(event.target.checked, this.props.indVarId);
  },
  addOption: function() {
    this.props.actions.addOption(this.refs.option.value, this.props.indVarId);
    this.refs.option.value = '';
  },
  removeOption: function(event) {
    event.preventDefault();
    this.props.actions.removeOption(event.target.value, this.props.indVarId);
  },

  render: function() {
    return (
      <div>
        <section className ="ind-var-input">
          <div>
              Please enter your Ind Variable here.
          </div>

          <label>What should x be called?</label>
          <input ref="name" type="text"  onChange={this.setName}/>

          <label>How many times do you have to do x to see a change in y?</label>
          <input ref="actionsPerTrial" type="number" onChange={this.setActionsPerTrial}/>

          <label>How many times would you like to repeat each way you can do x?</label>
          <input ref="numTrials" type="number" onChange={this.setNumTrials}/>

          <label>Please randomize the events for me</label>
          <input ref="randomized" type="checkbox" onChange={this.setRandomized}/>

          <label>List Options For X</label>
          <input ref="option" type="text"/>
          <button onClick={this.addOption}>Add an option</button>
          <div className="optionList">
            {this.props.options.map(function (option) {
              return (
                <div>
                {option}
                <button
                  className="remove-option"
                  onClick={this.removeOption}
                  value={option}>
                  remove
                  </button>
                </div>
              );
            }.bind(this))}
          </div>
        </section>
      </div>
    )
  }
})

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(IndVar);
