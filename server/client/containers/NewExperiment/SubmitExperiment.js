var React = require('react');
var $ = require('jquery');
var connect = require('react-redux').connect;
var unNormalize = require('../../utils/un-normalize');
var stateToNorm = require('../../utils/stateToNorm');
var schema = require('../../utils/schema');
var filterData = require('../../utils/normalDataFilter');
var Router = require('react-router').Router;
import { History } from 'react-router';

var NewExperimentActions = require('../../actions/NewExperiment');
var bindActionCreators = require('redux').bindActionCreators;

function mapStatetoProps (state, ownProps) {
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
    var state = store.getState();
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
      success: function (data) {
        this.history.pushState(null, '/dashboard');
        this.props.actions.resetQuestionIndex();
      }.bind(this),
      error: function (err) {
        console.log(err);
      }
    });
  },

  render: function () {
    return (
      <div className="new-experiment-container">
        <button ref="submitExperiment" onClick={this.handleClick}>Save Experiment</button>
      </div>
    );
  }
});

module.exports = connect(mapStatetoProps, mapDispatchtoProps)(SubmitExperiment);
