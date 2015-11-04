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
  componentWillMount: function () {
    this.props.actions.setIndVarName(this.props.cause, this.props.indVarId);
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
        <h3 className="subsection-title">Independent Variable</h3>
        <p className="guide">The independent variable is the cause you change.</p>
        <div className="question-set">
          <p className="question">
            How many times do you have to do/change <span className="definition-inline"> {this.props.cause} </span> 
            to see a change in <span className="definition-inline"> {this.props.effect}</span>?
          </p>
          <input className="input-number" ref="actionsPerTrial" type="number" onChange={this.setActionsPerTrial}/>
        </div>

        <div className="question-set">
          <p className="question">
            List all of the options for <span className="definition-inline"> {this.props.cause}</span>
          </p>
          <input ref="option" type="text"/>
        <button className="set-button" onClick={this.addOption}>Add an option</button>
        </div>

        <div>
          {this.props.options.map(function (option) {
            return (
              <div className="added-item">
              <button
                className="remove-button"
                onClick={this.removeOption}
                value={option}>
                {'\u2326'}
                </button>
              {option}
              </div>
            );
          }.bind(this))}
        </div>

        <div className="question-set">
          <p className="question">
            How many times would you like to repeat each way you can do  
            <span className="cause"> {this.props.cause}</span>?
          </p>
          <input className="input-number" ref="numTrials" type="number" onChange={this.setNumTrials}/>
        </div>

        <div className="question-set">
          <p className="question">Please randomize the events for me</p>
          <input className="input-checkbox" ref="randomized" type="checkbox" onChange={this.setRandomized}/>
        </div>
      </div>
    )
  }
})

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(IndVar);
