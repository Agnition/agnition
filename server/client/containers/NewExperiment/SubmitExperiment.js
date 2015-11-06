var React = require('react');
var $ = require('jquery');
var connect = require('react-redux').connect;
var stateToNorm = require('../../utils/stateToNorm');
var filterData = require('../../utils/normalDataFilter');
var History = require('react-router').History;

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state) {
  return {
    userId: state.User.get('id')
  };
}

function mapDispatchtoProps (dispatch) {
  return {
    actions: bindActionCreators(NewExperimentActions, dispatch)
  };
}

var SubmitExperiment = React.createClass({

  mixins: [ History ],

  handleClick: function () {
    var state = window.store.getState();
    var normalState = stateToNorm(state);
    var data = filterData(normalState.entities, 'experiments', this.props.expId);
    data = JSON.stringify(data);
    var userId = this.props.userId;
    var url = '/users/' + userId + '/experiments/';
    $.ajax({
      url: url,
      type: 'POST',
      contentType: 'application/json',
      data: data,
      success: function () {
        this.history.pushState(null, '/myexps');
        this.props.actions.resetQuestionIndex();
      }.bind(this),
      error: function (err) {
        console.log(err);
      }
    });
  },

  render: function () {
    return (
      <section className="subsection-v new-exp-section">
        <h3 className="subsection-title">Submit</h3>
        <div className="question-set">
          <p className="question">
            Are you ready to submit your experiment?
          </p>
          <button className="submit-button" ref="submitExperiment" onClick={this.handleClick}>Save Experiment</button>
        </div>
      </section>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(SubmitExperiment);
