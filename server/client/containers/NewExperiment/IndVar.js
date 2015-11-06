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
  onKey : function (event) {
    if(event.which === 13) {
      this.addOption();
    }
  },
  componentDidUpdate: function () {
    this.checkValidity();
  },
  componentDidMount: function () {
    // setting default actions per trial
    this.setActionsPerTrial();
    this.checkValidity();
  },
  componentWillMount: function () {
    this.props.actions.setIndVarName(this.props.cause, this.props.indVarId);
  },
  checkValidity: function () {
    var refs = ['numTrials'];
    if (refs.map(function(ref) {
      return this.refs[ref].validity.valid;
    }.bind(this)).every(function(valid) {
      return valid;
    }) && this.props.options.length >= 2) {
      this.props.actions.setValidity(true);
    } else {
      this.props.actions.setValidity(false);
    }
  },
  setActionsPerTrial: function () {
    //sets a default
    this.props.actions.setActionsPerTrial(1, this.props.indVarId);
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
        <div className="question-set options-list">
          <p className="question">
            List all of the options for <span className="definition-inline"> {this.props.cause}</span>
          </p>
          <div className="add-option">
            <input placeholder="1 Cup" ref="option" type="text" className="options" onKeyDown={this.onKey}/>
            <button className="set-button options" onClick={this.addOption}>Add an option</button>
          </div>
        </div>

        <div>
          {this.props.options.map(function (option) {
            return (
              <div className="added-item">
              {option}
              <button
                className="remove-button"
                onClick={this.removeOption}
                value={option}>
                Remove
                </button>
              </div>
            );
          }.bind(this))}
        </div>

        <div className="question-set">
          <p className="question">
            How many times would you like to repeat each way you can do
            <span className="cause"> {this.props.cause}</span>?
          </p>
          <input placeholder="4" className="input-number" ref="numTrials" type="number" onChange={this.setNumTrials} min={1} step={1} onChange={this.setNumTrials} required  />
        </div>

        <div className="indvar-question">
          <input className="input-checkbox" ref="randomized" type="checkbox" onChange={this.setRandomized}/>
          <p className="question">Please randomize the events for me</p>
        </div>
      </div>
    )
  }
})

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(IndVar);
