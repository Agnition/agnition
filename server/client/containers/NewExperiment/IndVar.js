var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Actions = require('../../actions/IndVars');

function mapStatetoProps (state, ownProps) {
  return {
    options: state.IndVars.getIn([ownProps.indVarId, 'options']).toJS(),
    cause: state.Experiments.getIn([ownProps.expId, 'cause']),
    effect: state.Experiments.getIn([ownProps.expId, 'effect'])
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
        <section className ="subsection-block">
          <h3>Independent Variable</h3>

          <p className="guide">
            What should <span className="cause"> {this.props.cause} </span> be called?
          </p>
          <label>independent variable
            <input className="input-text" ref="name" type="text"  onChange={this.setName}/>
          </label>
          <p className="guide">
            How many times do you have to do/change <span className="cause"> {this.props.cause} </span> 
            to see a change in <span className="effect"> {this.props.effect}</span>?
          </p>
          <label>action/trial
            <input className="input-number" ref="actionsPerTrial" type="number" onChange={this.setActionsPerTrial}/>
          </label>
          <p className="question">
            List all of the options for <span className="cause"> {this.props.cause}</span>
          </p>
          <input ref="option" type="text"/>
          <button onClick={this.addOption}>Add an option</button>
          <div className="subsection-block">
            {this.props.options.map(function (option) {
              return (
                <div className="added-item">
                {option}
                <button
                  className="remove-button"
                  onClick={this.removeOption}
                  value={option}>
                  remove
                  </button>
                </div>
              );
            }.bind(this))}
          </div>

          <p className="question">
            How many times would you like to repeat each way you can do  
            <span className="cause"> {this.props.cause}</span>?
          </p>
          <label>number of trials
            <input className="input-number" ref="numTrials" type="number" onChange={this.setNumTrials}/>
          </label>

          <label>Please randomize the events for me
            <input className="input-checkbox" ref="randomized" type="checkbox" onChange={this.setRandomized}/>
          </label>
        </section>
      </div>
    )
  }
})

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(IndVar);
